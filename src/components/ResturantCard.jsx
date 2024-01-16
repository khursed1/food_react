const ResturantCard = (props) => {
    const { resData } = props;
    let {name, cloudinaryImageId, avgRating ,cuisines,costForTwo} = resData.info;
    cuisines=cuisines.join(', ');
    return (
      <div className="res-card">
        <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        {/* <h3>{resData.restaurantName}</h3>
              <h4>{resData.cuisine}</h4>
              <h4>{"rating "+resData.rating}</h4>        
              <h4>{"price "+resData.price}</h4> */}
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{"rating " + avgRating}</h4>
        <h4>{ costForTwo}</h4>
      </div>
    )
  }
  export default ResturantCard;