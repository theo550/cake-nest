export const formatPrice = (price: number) => {
  return price.toFixed(2);
};

export const replaceDot = (price: string) => {
  return price.replace('.', ',');
}