import { create } from "zustand";
import { RegisterType, SearchRegisterInputs } from "../types/register";
import { RegisterMockData } from "../data/register-mockup";

interface RegisterStoreType {
  searchedRegister: RegisterType[];
  searchRegister: (data: SearchRegisterInputs) => void;
}

export const useRegisterStore = create<RegisterStoreType>((set) => ({
  searchedRegister: [],
  searchRegister: (data: SearchRegisterInputs) =>
    set(() => ({
      searchedRegister: RegisterMockData.list.filter(
        (item) =>
          item.address.includes(data.address) &&
          item.type === data.register_type
      ),
    })),
}));
