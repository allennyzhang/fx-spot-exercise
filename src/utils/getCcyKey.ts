import { ICcyPair } from "../app/spotSlice";

export function getCcyKey({ ccy1, ccy2 }: ICcyPair) {
  return `${ccy1.toLowerCase()}${ccy2.toLowerCase()}`;
}