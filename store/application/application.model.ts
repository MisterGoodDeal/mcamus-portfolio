export interface App {
  token: string;
  loading: boolean;
  user: User;
  lang: "fr" | "en";
}

export interface User extends BasicUser {}

export interface BasicUser {
  id: number;
  created_at: string;
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  authToken: string;
}

export interface MeResponse extends Omit<User, "password"> {}
