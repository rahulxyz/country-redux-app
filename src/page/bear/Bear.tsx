import { Link } from "react-router";
import { useBearSelectors } from "./BearSelector";

function Bear() {
  //   const bears = useBoundStore((state) => state.bear.bears);
  //   const increase = useBoundStore((state) => state.bear.increase);
  //   const decrease = useBoundStore((state) => state.bear.decrease);

  const bears = useBearSelectors.bears();
  const increase = useBearSelectors.increase();
  const decrease = useBearSelectors.decrease();

  return (
    <div>
      <p>Bears: {bears}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <Link to="/fish">Goto</Link>
    </div>
  );
}

export default Bear;
