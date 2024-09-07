import { create } from "zustand";
import { RegisterType, SearchRegisterInputs } from "../types/register";
import { RegisterMockData } from "../components/register/data/register-mockup";
import { OpenedRegisterType } from "../pages/RegisterOpen";

interface RegisterStoreType {
  searchedRegister: RegisterType[];
  openedRegister: OpenedRegisterType[];
  searchRegister: (data: SearchRegisterInputs) => void;
  toggleCheckbox: (id: number) => void;
  toggleCheckboxAll: (isCheckedAll: boolean) => void;
  addOpenedRegister: (searched: RegisterType[]) => void;
}

export const useRegisterStore = create<RegisterStoreType>((set) => ({
  searchedRegister: [],
  openedRegister: [],
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
