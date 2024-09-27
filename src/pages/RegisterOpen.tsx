import Button from "../components/register/Button";
import { OpenedRegisterAPIType } from "../types/register";
import SelectBox from "../components/register/SelectBox";
import { useForm } from "react-hook-form";
import RegisterWrapper from "../components/register/RegisterWrapper";
import Checkbox from "../components/register/Checkbox";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/register/LoadingSpinner";
import { useRegisterStore } from "../store/registerStore";
import OpenRegisterPaginationNav from "../components/register/OpenRegisterPaginationNav";
import { checkOpenedRegister } from "../api/register";

const SELECT_DATA = [
  { id: 1, name: "10개씩" },
  { id: 2, name: "50개씩" },
  { id: 3, name: "100개씩" },
];

const RegisterOpenTitleData = {
  title: "등기/대장 열람내역",
  desc: "",
};

const titleHeader = [
  "체크",
  "구분",
  "고유번호",
  "주소",
  "소유자",
  "변동정보",
  "열람 날짜",
  "등기 신규 열람",
  "계약서 작성",
  "다운로드",
];

const RegisterOpen = () => {
  const readLocalStorageRegister = () => {
    const localStorageRegister = localStorage.getItem("openedRegisters");

    return localStorageRegister
      ? JSON.parse(localStorageRegister)
      : { result: [] };
  };

  const [localRegister, setLocalRegister] = useState<OpenedRegisterAPIType>(
    readLocalStorageRegister
  );
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [pageCount, setPageCount] = useState(10);

  const searchOpenRegisterData = useRegisterStore(
    (state) => state.searchOpenRegisterData
  );
  const setSearchOpenRegisterData = useRegisterStore(
    (state) => state.setSearchOpenRegisterData
  );

  useEffect(() => {
    setSearchOpenRegisterData({
      address: "",
      register_type: "",
    });
  }, []);

  useEffect(() => {
    checkOpenedRegister().then((data: OpenedRegisterAPIType) => {
      setLocalRegister((prev) => {
        const existingIds = prev.result.map((item) => item.id);

        const newItems = data.result
          .filter((item) => !existingIds.includes(item.id)) // 중복된 항목 제외
          .map((item) => ({
            ...item,
            category:
              item.category === "iros"
                ? "등기"
                : item.category === "building"
                ? "대장"
                : item.category,
          }));

        return {
          ...prev,
          result: [...prev.result, ...newItems].sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          ),
        };
      });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("openedRegisters", JSON.stringify(localRegister));
  }, [localRegister]);

  useEffect(() => {
    const findUnCheckedItem = localRegister.result.every(
      (item) => item.isChecked
    );

    setIsCheckedAll(findUnCheckedItem);
  }, [localRegister]);

  const { register } = useForm();

  const getCurrentDate = (now: Date) => {
    const date = new Date(now);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const handlePrintPdf = (pdf_url: string) => {
    if (pdf_url !== "") {
      window.open(
        pdf_url,
        "_blank",
        "width=800, height=600, toolbar=no, scrollbars=yes, resizable=yes"
      );
    } else {
      alert("pdf가 없습니다.");
    }
  };

  const handleDeleteRow = () => {
    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.filter((item) => !item.isChecked),
    }));
  };

  const toggleCheckbox = (unique: string) => {
    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.map((item) =>
        item.unique === unique ? { ...item, isChecked: !item.isChecked } : item
      ),
    }));
  };

  const toggleCheckboxAll = () => {
    setIsCheckedAll((prev) => !prev);

    setLocalRegister((prev) => ({
      ...prev,
      result: prev.result.map((item) => ({
        ...item,
        isChecked: !isCheckedAll,
      })),
    }));
  };

  const handleSelectPageCount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const numberOnlyReg = /[^0-9]/g;

    setPageCount(Number(e.target.value.replace(numberOnlyReg, "")));
  };

  // 필터링된 데이터 계산
  const filteredData = localRegister?.result.filter((item) => {
    // 주소 필터링
    const isAddressMatched =
      searchOpenRegisterData.address === "" ||
      item.juso.includes(searchOpenRegisterData.address);

    // register_type 필터링
    const isRegisterTypeMatched =
      searchOpenRegisterData.register_type === "전체" ||
      searchOpenRegisterData.register_type === "" ||
      item.category === searchOpenRegisterData.register_type;

    // 두 조건이 모두 만족하는 경우에만 필터링
    return isAddressMatched && isRegisterTypeMatched;
  });

  return (
    <div className='p-[50px]'>
      <RegisterWrapper titleData={RegisterOpenTitleData}>
        {localRegister ? (
          <>
            <div className='flex items-center justify-end max-w-[1264px] mx-10 my-3 gap-[10px]'>
              <Button
                onClick={handleDeleteRow}
                className='w-[66px] h-[34px] rounded-md border border-[#cccccc] bg-white font-noto-sans-kr font-normal text-sm text-black'
              >
                삭제
              </Button>
              <SelectBox
                className='w-32 h-[34px] px-2 border border-[#cccccc] rounded-md text-sm text-[#6f6f6f]'
                register={register("register_open_count")}
                selectData={SELECT_DATA}
                onChange={handleSelectPageCount}
              ></SelectBox>
            </div>
            <OpenRegisterPaginationNav
              filteredData={filteredData}
              pageCount={pageCount}
            >
              {(currentData) => (
                <div className='max-w-[1264px] mx-10'>
                  <table className='text-sm text-center w-full'>
                    <thead className='bg-[#f7f7f8]'>
                      <tr className='h-[30px]'>
                        {titleHeader.map((item) => {
                          if (item === "체크") {
                            return (
                              <th className='border border-[#7f7f7f] px-1 translate-y-0.5'>
                                <Checkbox
                                  type='checkbox'
                                  onClick={toggleCheckboxAll}
                                  checked={isCheckedAll}
                                ></Checkbox>
                              </th>
                            );
                          } else {
                            return (
                              <th className='whitespace-nowrap px-2 border border-[#7f7f7f]'>
                                {item}
                              </th>
                            );
                          }
                        })}
                      </tr>
                    </thead>
                    <tbody className='border-b border-[#7f7f7f]'>
                      {currentData.length === 0 ? (
                        // 검색 결과가 없을 경우
                        <tr key='no-result'>
                          <td
                            colSpan={10}
                            className='h-[60px] text-center border-r border-l p-2 border-[#7f7f7f]'
                          >
                            검색 내용이 없습니다
                          </td>
                        </tr>
                      ) : (
                        // 검색 결과가 있을 경우
                        currentData.map((item) => {
                          const registerData = [
                            <Checkbox
                              type='checkbox'
                              checked={item.isChecked}
                              onClick={() => toggleCheckbox(item.unique)}
                            />,
                            item.category,
                            item.unique,
                            item.juso,
                            item.owner.join(", "),
                            item.is_change ? "있음" : "없음",
                            getCurrentDate(item.created_at),
                            item.category?.includes("등기") ? (
                              <Button
                                className='w-[80px] h-7 text-sm'
                                onClick={() => handlePrintPdf(item.pdf_url)}
                              >
                                열람
                              </Button>
                            ) : (
                              "-"
                            ),
                            item.category?.includes("등기") ? (
                              <Button className='w-[80px] h-7 text-sm'>
                                작성
                              </Button>
                            ) : (
                              "-"
                            ),
                            <Button
                              className='w-[80px] h-7 text-sm'
                              onClick={() => handlePrintPdf(item.pdf_url)}
                            >
                              다운로드
                            </Button>,
                          ];

                          return (
                            <tr key={item.id}>
                              {registerData.map((data, index) => (
                                <td
                                  key={index}
                                  className='h-[30px] max-w-[310px] border-r border-l p-2 border-[#7f7f7f]'
                                >
                                  {data}
                                </td>
                              ))}
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </OpenRegisterPaginationNav>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </RegisterWrapper>
    </div>
  );
};
export default RegisterOpen;
