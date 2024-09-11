import { create } from "zustand";
import { RegisterAPIType, RegisterType } from "../types/register";
import { OpenedRegisterType } from "../pages/RegisterOpen";

interface RegisterStoreType {
  searchedRegister: RegisterAPIType;
  openedRegister: OpenedRegisterType[];
  addSearchRegister: (data: RegisterAPIType, register_type: string) => void;
  toggleCheckbox: (unique: string) => void;
  toggleCheckboxAll: (isCheckedAll: boolean) => void;
  addOpenedRegister: (searched: RegisterType[]) => void;
}

export const useRegisterStore = create<RegisterStoreType>((set) => ({
  searchedRegister: {
    last_page: "0",
    result: [
      {
        unique: "",
        address: "",
        kind: "",
      },
    ],
    status: 0,
  },
  openedRegister: [],
  addSearchRegister: (data: RegisterAPIType, register_type) =>
    set((state) => ({
      searchedRegister: {
        ...state.searchedRegister,
        last_page: data.last_page,
        status: data.status,
        result: data.result.map((item) => ({
          ...item,
          register_type: register_type,
          isChecked: false,
        })),
      },
    })),

  toggleCheckbox: (unique: string) =>
    set((state) => ({
      searchedRegister: {
        ...state.searchedRegister,
        result: state.searchedRegister.result.map((item) =>
          item.unique === unique
            ? { ...item, isChecked: !item.isChecked }
            : item
        ),
      },
    })),

  toggleCheckboxAll: (isCheckedAll: boolean) =>
    set((state) => ({
      searchedRegister: {
        ...state.searchedRegister,
        result: state.searchedRegister.result.map((item) => ({
          ...item,
          isChecked: !isCheckedAll,
        })),
      },
    })),

  addOpenedRegister: (data: any[]) =>
    set((state) => ({
      openedRegister: [
        ...state.openedRegister,
        ...data.map((item) => ({
          ...item,
          serial_number: item.id, // 적절한 값으로 대체
          owner: "default owner", // 적절한 값으로 대체
          changed: "있음", // 적절한 값으로 대체
          createdAt: "2024-09-06", // 적절한 값으로 대체
        })),
      ],
    })),
}));
