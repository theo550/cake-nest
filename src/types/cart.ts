export type CartType = {
  id: number;
  quantity:number;
}

export type CartContextType = {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
}