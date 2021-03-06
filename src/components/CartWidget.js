import { Link } from "react-router-dom";
import {BsFillCartFill} from 'react-icons/bs';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (
        <Link to={"/cart"} className="cart-widget">
          <BsFillCartFill />
          <span>{cartQuantity()}</span>
        </Link>
    )
}

export default CartWidget;