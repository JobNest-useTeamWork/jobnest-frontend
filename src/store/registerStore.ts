import { create } from "zustand";
import { SearchRegisterInputs } from "../types/registerInputType";

interface RegisterStoreType {
  searchedRegister: SearchRegisterInputs[];
  setSearchedRegister: (data: SearchRegisterInputs[]) => void;
}

export const useRegisterStore = create<RegisterStoreType>((set) => ({
  searchedRegister: [],
  setSearchedRegister: (data: SearchRegisterInputs[]) =>
    set({
      searchedRegister: data,
    }),
}));
