import "./Cart-icon-style.scss";
import "./Cart-icon-style.scss";
// import shoppingIcon from "../../assets/ShoppingBag.svg";
import { ReactComponent as ShoppingIcon } from "../../assets/ShoppingBag.svg";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-context";

function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const numberOfItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setIsCartOpen(!isCartOpen);
      }}
    >
      {/* <img src={shoppingIcon} alt="shoppingIcon" className="shopping-icon" /> */}

      <ShoppingIcon alt="shoppingIcon" className="shopping-icon" />
      <span className="item-count">{numberOfItems}</span>
    </div>
  );
}

export default CartIcon;
