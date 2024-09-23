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

export type OpenedRegisterType = {
  id: number | string;
  register_type?: string;
  category: string;
  unique: string;
  juso: string;
  owner: string[];
  is_change: boolean;
  pdf_url: string;
  created_at: Date;
  isChecked: boolean;
};

export type OpenedRegisterAPIType = {
  result: OpenedRegisterType[];
};
