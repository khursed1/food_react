import ResturantCard from "./ResturantCard"
import { useState, useEffect } from "react";
import Shimer from "./Shimer";
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
  if (DumbyData.length === 0) {
    return <>
      <Shimer />
    </>
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button onClick={
            () => {
              const lowerCaseSearch = searchText.trim().toLowerCase();
              const filteredRes = DumbyData.filter((resData) =>
                resData.info.name.toLowerCase().includes(lowerCaseSearch)
              );
              setFilteredRes(filteredRes);

            }
          }>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
        }
        }>Top rated Resturants</button>
      </div>
      <div className="res-container">
        {
          FilteredRes.map((rest, index) => (
            <ResturantCard key={index} resData={rest} />
          ))
        }
      </div>

    </div>
  )
}
export default Body; 