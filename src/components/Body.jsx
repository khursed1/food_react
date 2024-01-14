import ResturantCard from "./ResturantCard"
import { useState } from "react";
const [DumbyData]=useState([
  {
    "restaurantName": "Tasty Bites",
    "cuisine": "Italian",
    "rating": 4.5,
    "price": "$$$"
  },
  {
    "restaurantName": "Spicy Delight",
    "cuisine": "Mexican",
    "rating": 3.8,
    "price": "$$"
  },
  {
    "restaurantName": "Sushi Haven",
    "cuisine": "Japanese",
    "rating": 4.2,
    "price": "$$$"
  },
  {
    "restaurantName": "Flavors of India",
    "cuisine": "Indian",
    "rating": 4.0,
    "price": "$$"
  },
  {
    "restaurantName": "Burger Paradise",
    "cuisine": "American",
    "rating": 4.1,
    "price": "$"
  }
]);
console.log(DumbyData[0])
const Body = () => {
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
              let Ddata=DumbyData.filter((resData)=>resData.rating>=4);
              console.log(Ddata)
            }  
            }>Top rated Resturants</button>
        </div>
        <div className="res-container">
          {
            DumbyData.map((rest, index) => (
              <ResturantCard key={index} resData={rest} />
            ))
          }
        </div>
  
      </div>
    )
  }
export default Body;