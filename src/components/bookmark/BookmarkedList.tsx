import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import BookmarkedEachItem from "./BookmarkedEachItem";
import ManageDetailModal from "./ManageDetailModal";
import { bookmarkDataInterface } from "../../types/bookmark";
import { getBookmarks, saveBookmarks } from "../../hooks/useBookmarks";

const defaultBookmarkData: bookmarkDataInterface[] = [
  {
    bookmarkId: "1",
    bookmarkTitle: "정부24",
    bookmarkURL: "https://www.gov.kr/portal/",
    bookmarkOgImg: "http://www.gov.kr/images/etc/og_image_600.png",
    checked: true,
  },
  {
    bookmarkId: "2",
    bookmarkTitle: `씨:리얼 (SEE:REAL)`,
    bookmarkURL: "https://seereal.lh.or.kr/main.do",
    bookmarkOgImg: "",
    checked: true,
  },
  {
    bookmarkId: "3",
    bookmarkTitle: "온하우스",
    bookmarkURL: "https://www.onhouse.com/",
    bookmarkOgImg: "",
    checked: true,
  },
  {
    bookmarkId: "4",
    bookmarkTitle: "다음부동산",
    bookmarkURL: "https://realty.daum.net/",
    bookmarkOgImg: "https://s.zigbang.com/v2/web/og/daum_default.png",
    checked: true,
  },
  {
    bookmarkId: "5",
    bookmarkTitle: "Naver",
    bookmarkURL: "https://www.naver.com/",
    bookmarkOgImg:
      "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
    checked: true,
  },
];

const BookmarkedList = () => {
  const [gridItem, setGridItem] =
    useState<bookmarkDataInterface[]>(defaultBookmarkData); // 그리드 요소
  const [modalYn, setmodalYn] = useState(false);

  // 모달이 닫힐 때마다 로컬 스토리지에서 checked가 true인 북마크들만 가져와서 그리드에 표시
  useEffect(() => {
    const saved = getBookmarks();
    if (saved.length === 0) {
      saveBookmarks(defaultBookmarkData);
      setGridItem(defaultBookmarkData);
    } else {
      const chkFiltered = saved.filter((item) => item.checked); // checked가 true인 항목만 필터링
      setGridItem(chkFiltered);
    }
  }, []);

  // 모달이 닫힐 때마다 로컬 스토리지에서 데이터 업데이트
  useEffect(() => {
    if (!modalYn) {
      const saved = getBookmarks();
      const chkFiltered = saved.filter((item) => item.checked); // 체크된 항목만 필터링
      setGridItem(chkFiltered); // 그리드 아이템 업데이트
    }
  }, [modalYn]); // 모달 상태가 변경될 때 실행

  // 체크된 항목으로 상태 업데이트
  // const updateGridItems = (checkedItems: bookmarkDataInterface[]) => {
  //     const filteredItems = checkedItems.filter(item => item.checked); // checked가 true인 항목들만 필터링
  //     setGridItem(filteredItems); // 그리드 아이템 업데이트
  //     console.log('Updated Grid Items:', filteredItems);
  // };

  // 드래그앤드랍
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setGridItem((prevItem) => {
        const oldIdx = prevItem.findIndex(
          (item) => item.bookmarkId === active.id
        );
        const newIdx = prevItem.findIndex(
          (item) => item.bookmarkId === over.id
        );
        return arrayMove(prevItem, oldIdx, newIdx);
      });
    }
  };

  // 즐겨찾기 관리 모달창
  const openManageModal = () => {
    setmodalYn((prev) => !prev);
  };

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={gridItem.map((item) => item.bookmarkId)}>
          <div className="flex flex-wrap gap-x-[30px] gap-y-[30px]">
            {gridItem.map((item) => (
              <div key={item.bookmarkId}>
                <BookmarkedEachItem
                  bookmarkId={item.bookmarkId}
                  bookmarkURL={item.bookmarkURL}
                  bookmarkTitle={item.bookmarkTitle}
                  bookmarkOgImg={item.bookmarkOgImg}
                  checked={item.checked}
                />
              </div>
            ))}
            <div className="outline-dotted outline-slate-500 flex justify-center items-center w-[150px] h-[150px] mb-[12px] bg-slate-100 rounded-lg">
              <button
                className="w-[93px] h-[35px] bg-blue-500 m-5 font-suit font-semibold text-center text-[15px] leading-[15px] flex items-center text-white rounded-md justify-center"
                onClick={openManageModal}
              >
                관리하기
              </button>
            </div>
          </div>
        </SortableContext>
      </DndContext>

      {modalYn ? (
        <ManageDetailModal closeModal={() => setmodalYn(false)} />
      ) : null}
    </>
  );
};

export default BookmarkedList;
