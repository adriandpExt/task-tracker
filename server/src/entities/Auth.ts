export interface Auth {
  id?: string;
  email: string;
  password: string;
}

export interface Register extends Auth {
  fullname: string;
  roleId: number;
}

export interface LoginResponse {
  id: string;
  email: string;
  token: string;
}

export interface User {
  userId: string;
  email: string;
}
