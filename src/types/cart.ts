import { MenuType } from "./menu"

export type CartContextType = {
  cart: MenuType[];
  setCart: (cart: MenuType[]) => void;
}