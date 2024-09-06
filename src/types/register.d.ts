export type RegisterTitleType = {
  title: string;
  desc: string;
};

export interface SearchRegisterInputs {
  address: string;
  register_type: string;
}

export interface RegisterType {
  id: number;
  address: string;
  type: string;
  isChecked?: boolean;
}
