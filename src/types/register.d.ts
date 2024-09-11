export type RegisterTitleType = {
  title: string;
  desc: string;
};

export interface SearchRegisterInputs {
  address: string;
  register_type: string;
}

export type RegisterType = {
  unique: string;
  kind: string;
  address: string;
  isChecked?: boolean;
  register_type?: string;
};

export type RegisterAPIType = {
  last_page: string;
  result: RegisterType[];
  status: number;
};
