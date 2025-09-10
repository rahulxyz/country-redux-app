import type { StateCreator } from "zustand/vanilla";

export interface FishSlice {
  fish: {
    fishes: number;
    addFish: () => void;
    removeFish: () => void;
  };
}

const initialState = {
  fishes: 0,
};

const createFishActions = (set: any) => {
  return {
    addFish: () =>
      set(
        (state: any) => ({
          fish: { ...state.fish, fishes: state.fish.fishes + 1 },
        }),
        false,
        "fish/addFish"
      ),
    removeFish: () =>
      set(
        (state: any) => ({
          fish: { ...state.fish, fishes: Math.max(0, state.fish.fishes - 1) },
        }),
        false,
        "fish/removeFish"
      ),
  };
};

export const createFishSlice: StateCreator<FishSlice, [], [], FishSlice> = (
  set
) => ({
  fish: {
    ...initialState,
    ...createFishActions(set)
  },
});
