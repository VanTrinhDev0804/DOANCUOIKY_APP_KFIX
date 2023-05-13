export interface IAdmin {
  name: string;
  username: string;
  ngaySinh: string;
  email: string;
  phone: string;
  role: string;
  avatar: string;
}

export interface IThongKe {
  thang?:  string;
  value? : number;
}

export interface IParams {
  page?: string;
  control?: string;
  tag?: string;
  id?: string;
  action?: string;
}

export interface IProfile {
  email: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  role: string;
  username: string;
  avatar: string;
}
export interface ISelect {
  handleChange ? : Function
  title?: string;
  w?: number;
  data?: Array<{ value: string; label: string }>;
  placeholder?: string;
}
export interface DataTypeThoSuaKhoa {
  key: number;
  id: string;
  maTho: string;
  tenTho: string;
  phone: string;
  cccd: string;
  ngaySinh: string;
  diaChi: string;
  loaiSC: Array<string>;
  balanceAc: number;
  img: string;
}

export interface DataTypeFilter {
  date: string,
  month: string,
  year: string,
}
