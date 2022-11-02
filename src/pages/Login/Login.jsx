import React from "react";
// import Acccount from "../components/Acccount";
import Account from "../../components/Account/Account";

const Login = () => {
  return (
    <Account
      btnValue={"Login"}
      fName={false}
      cPassword={false}
      pText={"Don't have an Account"}
      spanText={"Click here to Register"}
    />
  );
};

export default Login;
