import { UUID } from "crypto";

export type CartType = {
  id: number | UUID;
  quantity:number;
}

export type CartContextType = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
}