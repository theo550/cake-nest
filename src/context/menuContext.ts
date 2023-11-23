import { createContext } from "react";
import { MenuContextType } from "../types/menu";

export const menuContext = createContext<MenuContextType | null>(null);
