import React from "react";
// import Account from "../components/Account/Account";
import Account from "../../components/Account/Account";

const Signup = () => {
  return (
    <Account
      btnValue={"Register"}
      cPassword={true}
      fName={true}
      pText={"Already have an Account"}
      spanText={"Click here to Login"}
    />
  );
};

export default Signup;
