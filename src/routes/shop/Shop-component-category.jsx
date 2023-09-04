import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import shop_data from "../../shop-data.json";
import { useContext } from "react";
import { productContext } from "../../contexts/Products-context";
import { categoriesContext } from "../../contexts/Categories-context";
import ProductCard from "../../components/product-card/Product-card-components";

import "./Shop-style.scss";

export const ShopCategory = () => {
  // const { products } = useContext(productContext);
  const { categoriesMap } = useContext(categoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <div key={title}>
            <Link to={title}>
              <h2>{title}</h2>
            </Link>

            <div className="products-container">
              {categoriesMap[title].slice(0, 4).map((product) => {
                return <ProductCard key={product.id} productsData={product} />;
                // console.log(product);
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export const Category = () => {
  const { categoriesMap } = useContext(categoriesContext);
  const { category } = useParams();

  return (
    <div>
      <h2 style={{ textAlign: "center", textTransform: "uppercase" }}>{category}</h2>

      <div className="products-container">
        {categoriesMap[category] &&
          categoriesMap[category].map((product) => {
            return <ProductCard key={product.id} productsData={product} />;
            // console.log(product);
          })}
      </div>
    </div>
  );
};

export const ShopAll = () => {
  return (
    <Routes>
      <Route index element={<ShopCategory />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
