export type AdminContextType = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export type SelectedTabContextType = {
  selectedTab: number;
  setSelectedTab: (selectedTab: number) => void;
}

export type isOpenContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}