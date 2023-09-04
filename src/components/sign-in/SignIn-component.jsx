import { useState } from "react";
// import { useState, useContext } from "react";
import { signInWithGooglePopup, signInWithGoogleEmailAndPassword, createUserDocumentFromAuth } from "../../Utilities/firebase/Firebase-utils";

import "./SignIn-style.scss";

import Button from "../button/Button-component";
import FormInput from "../form-input/Form-input-component";

// import { UserContext } from "../../contexts/user.context";

const defaultForm = {
  displayName: "",
  email: "",
  pw: "",
  cpw: "",
};

function SigninForm() {
  const [formVal, setFormVal] = useState(defaultForm);
  const { email, pw } = formVal;

  // const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormVal({ ...formVal, [name]: value });
    // console.log(formVal);
  };

  const logGoogleUser = async () => {
    // const { user } = await signInWithGooglePopup();
    await signInWithGooglePopup();
    // setCurrentUser(user);
    // const userDocRef = await createUserDocumentFromAuth(user);
  };

  const resetFormField = () => {
    setFormVal(defaultForm);
  };

  const HandleSignInWithPW = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithGoogleEmailAndPassword(email, pw);
      // console.log(userss);
      // setCurrentUser(user);
      resetFormField();
    } catch (error) {
      if (error.code == `auth/wrong-password`) {
        alert("Wrong Password.");
      } else if (error.code == `auth/user-not-found`) {
        alert("User is not found.");
      }
      console.log(error);
    }
  };

  const logRedirectedGoogleUser = async () => {};
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>

      <form>
        <FormInput label="Email" type="email" id="emaild" name="email" required value={email} onChange={handleChange} />

        <FormInput label="Password" type="password" id="pwd" name="pw" required value={pw} onChange={handleChange} />

        <div className="buttons-container">
          <Button type="submit" onClick={HandleSignInWithPW} buttonType="inverted">
            Sign In
          </Button>
          <Button buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>

        {/* <Button buttonType="google" onClick={logRedirectedGoogleUser}>
          Sign in with Google Redirect
        </Button> */}
      </form>
    </div>
  );
}

export default SigninForm;
