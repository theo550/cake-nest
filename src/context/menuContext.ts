import { createContext } from "react";
import { MenuContextType } from "../types/menu";
import { SelectedMenuContextType } from "../types/admin";

export const menuContext = createContext<MenuContextType | null>(null);
export const SelectedMenuContext = createContext<SelectedMenuContextType | null>(null);