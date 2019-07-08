export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface AuthState {
  status: string;
  token: string;
  user?: User;
}
