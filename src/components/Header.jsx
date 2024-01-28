import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const cartData = useSelector((store) => store.cart.items);
    console.log(cartData)
    const [Btn, setBtn] = useState("login");
    const online = useOnlineStatus();
    const data = useContext(UserContext);//UseContext is used to use the context
    return (

        <div className="flex justify-between bg-gray-50">
            <div className="logo_container">
                <img className="logo " src="data:image/png;base64,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" />
            </div>
            <div className="flex items-center">

                <ul className="flex p-1 m-1">
                    <li className="px-2">Online: {online ? "✅" : "❌"}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2 font-medium"><Link to="/cart">Cart-{cartData.length}</Link></li>
                    <button className="butn" onClick={() => {
                        Btn == "login" ? setBtn("log out") : setBtn("login");
                    }}>{Btn}</button>
                    <li className="font-medium pl-2">{data.logedInUser}</li>
                </ul>
            </div>
        </div>
    )
};
export default Header;