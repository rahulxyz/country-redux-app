import { useBoundStore } from "../../store/store";

export const useBearSelectors = {
  bears: () => useBoundStore((s) => s.bear.bears),
  increase: () => useBoundStore((s) => s.bear.increase),
  decrease: () => useBoundStore((s) => s.bear.decrease),
};
