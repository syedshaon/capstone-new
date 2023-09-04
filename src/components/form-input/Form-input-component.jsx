import React from "react";
import "./Form-input-style.scss";

function FormInput({ label, ...otherProp }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProp} />
      <label className={`${otherProp.value.length ? "shrink" : ""} form-input-label`} htmlFor="displayName">
        {label}
      </label>
    </div>
  );
}

export default FormInput;
