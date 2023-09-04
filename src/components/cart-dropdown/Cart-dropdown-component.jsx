import { Routes, Link } from "react-router-dom";

import "./Cart-Drop-Down-style.scss";
import Button from "../button/Button-component";
import CartItem from "../cart-item/Cart-item-component";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-context";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} AllCartItems={item} />
        ))}
      </div>
      {/* checkout */}
      <Link to="/checkout">
        <Button>Checkout</Button>
      </Link>
    </div>
  );
}

export default CartDropdown;
