import SignUpForm from "../../components/sign-up-form/Sign-up-form-component";

import SigninForm from "../../components/sign-in/SignIn-component";
import "./Authentication-style.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SigninForm />

      <SignUpForm />
    </div>
  );
}

export default Authentication;
