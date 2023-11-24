export type MenuType = {
  id: number;
  imageSource: string;
  title: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
  isAdvertised: boolean;
}

export type MenuContextType = {
  menu: MenuType[];
  setMenu: (menu: MenuType[]) => void;
}