import { useEffect,  useState } from "react";
import { ResMenuApi } from "./Constant";

const useResturantMenu = (resID) => {
    const [resInfo, setResInfo] = useState("");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(ResMenuApi + resID);
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}


export default useResturantMenu;