const ResturantCard = (props) => {
    const { resData } = props;
    const { restaurantName, cuisine, rating, price } = resData;
    return (
      <div className="res-card">
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
        {/* <h3>{resData.restaurantName}</h3>
              <h4>{resData.cuisine}</h4>
              <h4>{"rating "+resData.rating}</h4>        
              <h4>{"price "+resData.price}</h4> */}
        <h3>{restaurantName}</h3>
        <h4>{cuisine}</h4>
        <h4>{"rating " + rating}</h4>
        <h4>{"price " + price}</h4>
      </div>
    )
  }
  export default ResturantCard;