// store.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { type FishSlice, createFishSlice } from "../page/fish/fishSlice";
import { type BearSlice, createBearSlice } from "../page/bear/bearSlice";
import { type CountrySlice, createCountrySlice } from "../page/country/CountrySlice";

type StoreState = FishSlice & BearSlice & CountrySlice;

export const useBoundStore = create<StoreState>()(
  devtools((...a) => ({
    ...createFishSlice(...a),
    ...createBearSlice(...a),
    ...createCountrySlice(...a),
  }))
);
