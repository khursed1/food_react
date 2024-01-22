import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [DumbyData, SetDumbyData] = useState([]);
  const [searchText, setSearchText] = useState(" ");
  const [FilteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5397507&lng=88.3789178&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    SetDumbyData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };
  const online = useOnlineStatus()
  if (!online) return <h1>You are offline, please check your internet connection</h1>;
  if (DumbyData.length === 0) {
    return <>
      <Shimer />
    </>
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input type="text" className="border border-solid border-black py-2 rounded-md ml-[-5px]" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button className="px-2 py-2 bg-green-400 mx-4 rounded-lg text-white hover:text-green-300 hover:bg-white border-2 border-green-400"
            onClick={
              () => {
                const lowerCaseSearch = searchText.trim().toLowerCase();
                const filteredRes = DumbyData.filter((resData) =>
                  resData.info.name.toLowerCase().includes(lowerCaseSearch)
                );
                setFilteredRes(filteredRes);

              }
            }>Search</button>
          <button className="bg-gray-100 py-2 px-2 rounded-lg" onClick={() => {
          }
          }>Top rated Resturants</button>
        </div>
      </div>
      <div className="flex flex-wrap content-between ml-[70px]">
        {
          FilteredRes.map((rest, index) => (
            <Link key={index} to={"/resturant/" + rest.info.id}> <ResturantCard resData={rest} /></Link>

          ))
        }
      </div>

    </div>
  )
}
export default Body; 