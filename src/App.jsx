import Home from "./routes/home/Home-component";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navigation } from "./routes/navigation/Navigation-component";

import Authentication from "./routes/authentication/Authentication-component";
import Checkout from "./routes/checkout/Checkout-component";

// const Shop = () => {
//   return <h1>I am at the shop page.</h1>;
// };

import { Shop } from "./routes/shop/Shop-component";
import { ShopAll } from "./routes/shop/Shop-component-category";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<ShopAll />} />
        <Route path="signin" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
