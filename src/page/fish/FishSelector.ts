import { useBoundStore } from "../../store/store";

export const useFishSelectors = {
  fishes: () => useBoundStore((s) => s.fish.fishes),
  addFish: () => useBoundStore((s) => s.fish.addFish),
  removeFish: () => useBoundStore((s) => s.fish.removeFish),
};
