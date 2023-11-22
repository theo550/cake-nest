export const formatPrice = (price: number) => {
  return price.toPrecision(3);
};

export const replaceDot = (price: string) => {
  return price.replace('.', ',');
}