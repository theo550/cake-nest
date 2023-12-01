import { UUID } from "crypto";
import { CartType } from "../types/cart";
import { MenuType } from "../types/menu";
import { discount } from "../types/highlight";

export const formatPrice = (price: number) => {
  return price.toFixed(2);
};

export const replaceDot = (price: string) => {
  return price.replace('.', ',');
}

export const calculateTotalPrice = (array: MenuType[], cart: CartType[], discount: discount[]) => {
  let total = 0;
  cart.map(item => {
    const currentMenu = array.find(i => i.id === item.id);
    const discountValue = discount.find(d => d.id === item.id)
    if (currentMenu) {
      total += currentMenu.price * item.quantity - (currentMenu.price * item.quantity *(discountValue?.amount || 0) / 100);
    }
  })
  return total;
}

export const isIncludeInArray = (array: MenuType[], menu: MenuType) => {
  const ids: (number | UUID)[] = [];
  array.map(item => {
    ids.push(item.id);
  })

  return ids.includes(menu.id);
}