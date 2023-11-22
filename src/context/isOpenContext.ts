import { createContext } from "react";
import { isOpenContextType } from "../types/admin";

export const isOpenContext = createContext<isOpenContextType | null>(null);
