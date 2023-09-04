import "./Checkout-style.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-context";

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeFromCart = (productToRemove) => {
    setCartItems((prev) => prev.filter((item) => item.id != productToRemove.id));
  };

  const decreaseCartItems = (productToAdd) => {
    //  If quantity is more than 1 then decrease quantity
    if (productToAdd.quantity > 1) {
      setCartItems((prev) => prev.map((cartItem) => (cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)));
    } else {
      //  If quantity equals 1 then decrease quantity

      setCartItems((prev) => prev.filter((item) => item.id != productToAdd.id));
    }
  };

  const increaseCartItems = (productToAdd) => {
    setCartItems((prev) => prev.map((cartItem) => (cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="checkout-item-container">
            <div className="image-container">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="name">{item.name}</div>
            <div className="quantity">
              <span className="arrow" onClick={() => decreaseCartItems(item)}>
                &lt;
              </span>
              <span className="value">{item.quantity}</span>

              <span className="arrow" onClick={() => increaseCartItems(item)}>
                &gt;
              </span>
            </div>
            <div className="price">{item.price * item.quantity}</div>
            <div className="remove-button" onClick={() => removeFromCart(item)}>
              X
            </div>
          </div>
        );
      })}

      <div className="total">Total:{cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</div>
    </div>
  );
}
