import "./Product-card-style.scss";
import Button from "../button/Button-component";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart-context";

function ProductCard({ productsData }) {
  const { name, price, imageUrl } = productsData;

  const { addItemsToCart } = useContext(CartContext);

  // const addProductToCart = () => addItemsToCart(productsData);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button onClick={() => addItemsToCart(productsData)} buttonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCard;
