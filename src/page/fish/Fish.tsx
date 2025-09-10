import { Link } from "react-router";
import { useFishSelectors } from "./FishSelector";

function Fish() {
  //   const fishes = useBoundStore((state) => state.fish.fishes);
  //   const addFish = useBoundStore((state) => state.fish.addFish);
  //   const removeFish = useBoundStore((state) => state.fish.removeFish);

  const fishes = useFishSelectors.fishes();
  const addFish = useFishSelectors.addFish();
  const removeFish = useFishSelectors.removeFish();

  return (
    <div>
      <p>Fishes: {fishes}</p>
      <button onClick={addFish}>Add Fish</button>
      <button onClick={removeFish}>Remove Fish</button>
      <Link to="/bear">Goto</Link>
    </div>
  );
}

export default Fish;
