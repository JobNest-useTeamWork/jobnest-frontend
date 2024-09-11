import { create } from "zustand";
import { RegisterAPIType } from "../types/register";

interface RegisterStoreType {
  searchedRegister: RegisterAPIType;
  addSearchRegister: (data: RegisterAPIType, register_type: string) => void;
  toggleCheckbox: (unique: string) => void;
  toggleCheckboxAll: (isCheckedAll: boolean) => void;
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
}));
