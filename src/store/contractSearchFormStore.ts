import { create } from "zustand";
import { TSearchFormType } from "../types/contractsearch";

type SearchFormStore = {
  searchForm: TSearchFormType;
  setSearchForm: (data: TSearchFormType) => void;
  resetSearchForm: () => void;
};

const today = new Date();
const formattedDate = today.toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환

export const contractSearchFormStore = create<SearchFormStore>((set) => ({
  searchForm: {
    startDate: formattedDate,
    endDate: formattedDate,
    contractType: "",
    contractStatus: [],
    transactionType: "",
    brokerageType: [],
  },
  setSearchForm: (data: TSearchFormType) => set({ searchForm: data }),
  resetSearchForm: () =>
    set({
      searchForm: {
        startDate: formattedDate,
        endDate: formattedDate,
        contractType: "",
        contractStatus: [],
        transactionType: "",
        brokerageType: [],
      },
    }),
}));
