import { UUID } from "crypto";

export type discount = {
  id: number | UUID;
  amount: number;
}

export type highlightContextType = {
  highlighted: number[];
  discount: discount[];
  setHighlighted: (highlighted: number[]) => void;
  setDiscount: (discount: discount[]) => void;
}