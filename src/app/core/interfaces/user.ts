export interface LoginUser{
    email:string;
    password:string;
}

export interface registerUser{
    email:string;
    avatar:string;
    password:string;
    confirmPassword:string;
    name:string;
}

export interface userStore {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}