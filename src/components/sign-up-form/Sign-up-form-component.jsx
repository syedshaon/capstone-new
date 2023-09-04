import { useState } from "react";
// import { useState, useContext } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../Utilities/firebase/Firebase-utils";

import FormInput from "../form-input/Form-input-component";

import "./Sign-up-form-styles.scss";

import Button from "../button/Button-component";
// import { UserContext } from "../../contexts/user.context";

const defaultForm = {
  displayName: "",
  email: "",
  pw: "",
  cpw: "",
};

function SignUpForm() {
  const [formVal, setFormVal] = useState(defaultForm);
  const { displayName, email, pw, cpw } = formVal;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
    // console.log(formVal);
  };
  const resetFormField = () => {
    setFormVal(defaultForm);
  };
  const handleSubmit = async (event) => {
    // const { email, pw } = event.target;
    event.preventDefault();
    if (pw != cpw) {
      alert("pw mismatch");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, pw);
      // console.log(user);
      // setCurrentUser(user);

      const userCreationResponse = await createUserDocumentFromAuth(user, { displayName });
      console.log("user created");
      resetFormField();
    } catch (error) {
      if (error.code == `auth/email-already-in-use`) {
        alert("Cannot create user, email already exists.");
      } else {
        console.log(`User creation process caused this error: ${error}`);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Name" type="text" id="displayName" name="displayName" required value={displayName} onChange={handleChange} />

        <FormInput label="Email" type="email" id="email" name="email" required value={email} onChange={handleChange} />

        <FormInput label="Password" type="password" id="pw" name="pw" required value={pw} onChange={handleChange} />

        <FormInput label="Confirm Password" type="password" id="cpw" name="cpw" required value={cpw} onChange={handleChange} />

        <Button buttonType="inverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;
