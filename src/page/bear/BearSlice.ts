// bearSlice.ts
import type { StateCreator } from "zustand/vanilla";

export interface BearSlice {
  bear: {
    bears: number;
    increase: () => void;
    decrease: () => void;
  };
}

const initialState = {
  bears: 0,
};

const createBearActions = (set: any) => {
  return {
    increase: () =>
      set(
        (state: any) => ({
          bear: { ...state.bear, bears: state.bear.bears + 1 },
        }),
        false,
        "bear/increase"
      ),
    decrease: () =>
      set(
        (state: any) => ({
          bear: { ...state.bear, bears: Math.max(0, state.bear.bears - 1) },
        }),
        false,
        "bear/decrease"
      ),
  };
};

export const createBearSlice: StateCreator<BearSlice, [], [], BearSlice> = (
  set
) => {
  return {
    bear: {
      ...initialState,
      ...createBearActions(set),
    },
  };
};

