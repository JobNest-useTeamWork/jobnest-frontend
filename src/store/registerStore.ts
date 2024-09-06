import { create } from "zustand";
import { RegisterType, SearchRegisterInputs } from "../types/register";
import { RegisterMockData } from "../components/register/data/register-mockup";

interface RegisterStoreType {
  searchedRegister: RegisterType[];
  searchRegister: (data: SearchRegisterInputs) => void;
  toggleCheckbox: (id: number) => void;
  toggleCheckboxAll: (isCheckedAll: boolean) => void;
}

export const useRegisterStore = create<RegisterStoreType>((set) => ({
  searchedRegister: [],
  searchRegister: (data: SearchRegisterInputs) =>
    set(() => ({
      searchedRegister: RegisterMockData.list
        .filter(
          (item) =>
            item.address.includes(data.address) &&
            item.type === data.register_type
        )
        .map((item) => ({
          ...item,
          isChecked: false,
        })),
    })),
  toggleCheckbox: (id: number) =>
    set((state) => ({
      searchedRegister: state.searchedRegister.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      ),
    })),
  toggleCheckboxAll: (isCheckedAll: boolean) =>
    set((state) => ({
      searchedRegister: state.searchedRegister.map((item) => {
        return isCheckedAll === false
          ? { ...item, isChecked: true }
          : { ...item, isChecked: false };
      }),
    })),
}));
