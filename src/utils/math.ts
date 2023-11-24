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