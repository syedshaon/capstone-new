// Default

// Inverted

// Google sign in

import "./Button-Styles.scss";

const buttonTypesClass = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <button type="button" className={`button-container ${buttonTypesClass[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
