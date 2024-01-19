import { useEffect, useState } from "react";
const ResturantMenu = () => {
    const [resMenu, setResMenu] = useState("");
    useEffect(() => {
        fetchmenu();
    }, []);
    const fetchmenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5644255&lng=88.37825610000002&restaurantId=50461&catalog_qa=undefined&submitAction=ENTER");
        const jsons = await data.json();
        setResMenu(jsons);

    };


    if (!resMenu) {
        // Render loading state or return null
        return <p>Loading...</p>;
    }
    console.log(resMenu);
    const { name, cuisines, costForTwoMessage, } = resMenu.data.cards[0]?.card?.card?.info;


    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(', ')}:-

                {costForTwoMessage}

            </p>
        </div>
    )
}
export default ResturantMenu;