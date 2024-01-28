import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const CartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const clearC = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-medium">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="text-white bg-gray-400 m-1 p-1 rounded-lg hover:bg-gray-600" onClick={clearC}>clear cart</button>
                <ItemList items={CartItems} />
            </div>
        </div>
    )
}
export default Cart;