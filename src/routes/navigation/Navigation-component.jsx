import { Routes, Link, Outlet } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/User-context";
import { CartContext } from "../../contexts/Cart-context";

// import Icon from "../../assets/Crown.svg";
import { ReactComponent as Icon } from "../../assets/Crown.svg";
import "./Navigation-style.scss";

import CartIcon from "../../components/cart-icon/Cart-icon-component";

import CartDropdown from "../../components/cart-dropdown/Cart-dropdown-component";

import { signOutUser } from "../../Utilities/firebase/Firebase-utils";

export const Navigation = () => {
  // const { setCurrentUser, currentUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // const signOutUserFromContext = async () => {
  //   const response = await signOutUser();
  //   setCurrentUser(null);
  // };
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          {/* <img src={Icon} alt="crown logo" className="logo" /> */}
          <Icon alt="crown logo" className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
          {currentUser ? (
            // <Link onClick={signOutUserFromContext} className="nav-link" to="/signin">
            //   Sign Out
            // </Link>
            <Link onClick={signOutUser} className="nav-link" to="/signin">
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};
