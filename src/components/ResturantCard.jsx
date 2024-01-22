const ResturantCard = (props) => {
    const { resData } = props;
    let {name, cloudinaryImageId, avgRating ,cuisines,costForTwo} = resData.info;
    cuisines=cuisines.join(', ');
    return (
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
        <img className="rounded-md h-48 w-56" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
        <h3 className=" font-bold">{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{"rating " + avgRating}</h4>
        <h4>{ costForTwo}</h4>
      </div>
    )
  }
  export default ResturantCard;