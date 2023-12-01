import { createContext } from "react";
import { highlightContextType } from "../types/highlight";

export const HighlightedContext = createContext<highlightContextType | null>(null);
