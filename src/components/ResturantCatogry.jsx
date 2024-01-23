import ItemList from "./ItemList";
import { useState } from "react";
const ResturantCatogry = ({ data, showitems, setResOpen, index }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { title } = data;
  const handleClick = () => {
    if (!showitems) {
      setIsOpen(!isOpen);
      setResOpen(index);
      return;
    }
    !isOpen ? setResOpen(null) : setResOpen(index);
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="bg-gray-50 w-6/12 mx-auto my-5 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium">
            {title}({data.itemCards.length})
          </span>
          {showitems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showitems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResturantCatogry;
