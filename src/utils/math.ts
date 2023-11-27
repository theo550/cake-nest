import { CartType } from "../types/cart";
import { MenuType } from "../types/menu";

export const formatPrice = (price: number) => {
  return price.toFixed(2);
};

export const replaceDot = (price: string) => {
  return price.replace('.', ',');
}

export const sortArrayOfObject = (array: MenuType[]) => {
  return array.sort((a, b) => b.id - a.id);
}

export const calculateTotalPrice = (array: MenuType[], cart: CartType[]) => {
  let total = 0;
  cart.map(item => {
    const currentMenu = array.find(i => i.id === item.id);
    if (currentMenu) {
      total += currentMenu.price * item.quantity;
    }
  })
  return total;
}

export const isIncludeInArray = (array: MenuType[], menu: MenuType) => {
  const ids: number[] = [];
  array.map(item => {
    ids.push(item.id);
  })

  return ids.includes(menu.id);
}