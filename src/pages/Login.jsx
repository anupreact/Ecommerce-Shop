import React from "react";
import Acccount from "../components/Acccount";

const Login = () => {
  return (
    <Acccount
      btnValue={"Login"}
      fName={false}
      cPassword={false}
      pText={"Don't have an Account"}
      spanText={"Click here to Register"}
    />
  );
};

export default Login;
