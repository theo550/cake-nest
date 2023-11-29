import { createContext } from "react";
import { UserContextType } from "../types/user";

export const UserContext = createContext<UserContextType | null>(null);
