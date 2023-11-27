import { UUID } from "crypto";

export type MenuType = {
  id: number | UUID;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
}

export const nullMenuType = {
  id: 0,
  imageSource: '',
  title: '',
  price: 1,
  quantity: 1,
  isAvailable: false,
  isAdvertised: false
}

export type MenuContextType = {
  menu: MenuType[];
  setMenu: (menu: MenuType[]) => void;
}