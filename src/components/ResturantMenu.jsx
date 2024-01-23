import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useFetchMenu";
import ResturantCatogry from "./ResturantCatogry";
import { useState } from "react";
const ResturantMenu = () => {
  const [resOpen, setResOpen] = useState(0);
  let key = 1;
  const { resID } = useParams();
  const resMenu = useResturantMenu(resID);
  if (!resMenu) {
    // Render loading state or return null
    return <p>Loading...</p>;
  }

  const { name, cuisines, costForTwoMessage } =
    resMenu.data.cards[0]?.card?.card?.info;
  const catogries =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-semibold m-3 text-2xl">{name}</h1>
      <p className="font-semibold text-lg">
        {cuisines.join(", ")}:-
        {costForTwoMessage}
      </p>
      {catogries.map((catogry, index) => (
        <ResturantCatogry
          key={++key}
          data={catogry?.card?.card}
          index={index}
          showitems={resOpen === index}
          setResOpen={(val) => setResOpen(val)}
        />
      ))}
    </div>
  );
};
export default ResturantMenu;
