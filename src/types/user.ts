import { MenuType } from "./menu";

export type UserType = {
  user_name: string;
  menu: MenuType[];
}

export type UserContextType = {
  user: UserType;
  setUser: (user: UserType) => void;
}

export const nullUser = {
  user_name: "",
  menu: []
}