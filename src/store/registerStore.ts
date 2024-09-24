import { create } from "zustand";
import { RegisterAPIType, SearchRegisterInputs } from "../types/register";

interface RegisterStoreType {
  searchData: SearchRegisterInputs;
  searchedRegister: RegisterAPIType;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  setSearchData: (searchData: SearchRegisterInputs) => void;
  addSearchRegister: (data: RegisterAPIType, register_type: string) => void;
  toggleCheckbox: (unique: string) => void;
  toggleCheckboxAll: (isCheckedAll: boolean) => void;
  resetSearchRegister: () => void;
}

const initialSearchedRegister = {
  last_page: "0",
  result: [
    {
      unique: "",
      address: "",
      kind: "",
    },
  ],
  status: 0,
};

export const useRegisterStore = create<RegisterStoreType>((set) => ({
  searchedRegister: initialSearchedRegister,
  searchData: { address: "", register_type: "" },
  isLoading: false,

  setLoading: (loading) => set({ isLoading: loading }),

  setSearchData: (searchData) =>
    set(() => ({
      searchData: {
        address: searchData.address,
        register_type: searchData.register_type,
      },
    })),

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

  resetSearchRegister: () =>
    set(() => ({
      searchedRegister: initialSearchedRegister,
    })),
}));
