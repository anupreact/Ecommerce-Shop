import React from "react";
import Acccount from "../components/Acccount";

const Signup = () => {
  return (
    <Acccount
      btnValue={"Register"}
      cPassword={true}
      fName={true}
      pText={"Already have an Account"}
      spanText={"Click here to Login"}
    />
  );
};

export default Signup;
