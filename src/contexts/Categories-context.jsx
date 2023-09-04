import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../Utilities/firebase/Firebase-utils";

import { getCategoriesAndDocuments } from "../Utilities/firebase/Firebase-utils";

// import allProducts from "../shop-data.json";
import SHOP_DATA from "../shop-data";

// export const productContext = createContext({
//   products: [],
// });

export const categoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // Commented after single run
  // Used to upload shop_data to firebase
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  // Used to retrieve shop_data from firebase
  // Commented after single run
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      // console.log(categoriesMap);
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };
  return <categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>;
};

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   // Commented after single run
//   // Used to upload shop_data to firebase
//   // useEffect(() => {
//   //   addCollectionAndDocuments("categories", SHOP_DATA);
//   // }, []);

//   // Used to retrieve shop_data from firebase
//   // Commented after single run
//   // useEffect(() => {
//   //   const getCategoriesMap = async () => {
//   //     const categoryMap = await getCategoriesAndDocuments();
//   //     console.log(categoryMap);
//   //   };
//   //   getCategoriesMap();
//   // });
//   const value = { products };
//   return <productContext.Provider value={value}>{children}</productContext.Provider>;
// };
