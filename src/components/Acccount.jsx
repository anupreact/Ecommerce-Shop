import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, Space } from "antd";
import { useWarningModal } from "./Testing/Hooks/useWarningModal";
import { users } from "./Testing/file1";
import axios from "axios";
import { login, logout } from "../actions/loginActions";
import { useToastMessage } from "./Testing/Hooks/useToastMessage";

// customized console
const c = console.log;
const fn = (x) => {
  return x;
};
const test = (x) => {
  c(`%c ${fn(x)}`, "background: #222; color: #bada55");
};
// customized console

const Acccount = (props) => {
  const { btnValue, pText, spanText, cPassword, fName } = props;
  const warningModal = useWarningModal();
  // const toastMessage = useToastMessage();
  const notifyMessage = useToastMessage();

  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.registerUserReducer);
  const loginState = useSelector((state) => state.loginReducer);

  const [loginRedirect, setLoginRedirect] = useState(false);
  const [registerRedirect, setRegisterRedirect] = useState(false);
  //   const [first, setfirst] = useState(second);
  const [formData, setFormData] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [state, setState] = useState({
    Name:"",
    email: "",
    password: "",
    confirmPassword: "",
    orders:[],
    address:""
  });

 

  const { Name, email, password, confirmPassword } = state;
  const handleInputChange = (e) => {
    let { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const fetchUsers = () => {
    axios.get("http://localhost:5000/users").then((res) => {
      const data = res.data;
      setJsonData(data);
      // c(data);
    });
  };

  //LOGIN WORKING PROPERLY
  useEffect(()=>{
    fetchUsers()
  },[email])
  //LOGIN WORKING PROPERLY

  const PostUsers = () => {
    axios.post(`http://localhost:5000/users`, state);
    // .then(response =>   response.data.id);
  };
  const handleSubmit = (e, v) => {
    e.preventDefault();

    // alert(`${v} form submitted successfully`)
    if (v === "Register") {
      if (
        email !== "" &&
        password !== "" &&
        confirmPassword !== "" &&
        password === confirmPassword
      ) {
        // fetchUsers();
        PostUsers();
        setFormData([...formData, state]);
        console.log("state", state);
        dispatch(registerUser(state));
        // toastMessage("Registered Successfully");
        notifyMessage("Registered Successfully");

        c("users", users);
        setTimeout(() => {
          setState({ Name: "", email: "", password: "", confirmPassword: "" });
          setRegisterRedirect(true);
        }, 2000);
      }else if(!email || !password || !confirmPassword) {
        warningModal("Empty mandatory fields","Mandatory fields are required")
      }
      else {
        // alert("Password doesn't match");
        warningModal(
          "Password Mis-match",
          "Password doesn't match"
        );
      }
      // const pId = products.find((p) => p.id == params.id);
    } else if (v === "Login") {
      fetchUsers();
      
      console.log(jsonData.find((p) => p.email === email));
      const user1 = jsonData.find((p) => p.email === email);

      if (email !== "" && password !== "") {
        test(`user1--${user1}`);
        test("test");

        if (user1) {
          const password1 = user1.password;
          console.log(user1, password1);

          if (email == user1.email && password == password1) {
            notifyMessage("Logged in succesfully");
            setFormData([...formData, { email, password }]);
            setTimeout(() => {
              setState({ email: "", password: "" });
              dispatch(login(email));
              setLoginRedirect(true);
              // localStorage.setItem("authUser",email)
              // dispatch(logout(email))
            }, 2000);
          } else {
            // alert("invalid Password ");
            warningModal(
              "Invalid email or password",
              "Please Provide valid Usernane and Password"
            );
          }
        } else {
          // alert("credentials not found")
          warningModal(
            "Credentials not found",
            "Please Provide valid Usernane and Password"
          );
        }
      } else if (!email || !password) {
        warningModal(
          "email or password cannot be empty",
          "Please Provide valid Usernane and Password"
        );
      }
    }
  };

  console.log("formData", formData);

  return (
    <>
      <ToastContainer position="top-left" />
      <main className="Login-container">
        {registerRedirect ? <Navigate to="/login" /> : ""}
        {loginRedirect ? <Navigate to="/" /> : ""}
        <section className="Account">
          <div className="heading">{btnValue}</div>
          <div className="content">
            <form
              className="Account-form"
              onSubmit={(e) => handleSubmit(e, btnValue)}
            >
              {fName ? (
                <input
                  type="text"
                  email
                  name="Name"
                  value={Name}
                  placeholder="Enter Your Name"
                  onChange={handleInputChange}
                />
              ) : (
                ""
              )}
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={handleInputChange}
              />
              {cPassword ? (
                <input
                  type="text"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              ) : (
                ""
              )}

              <button> {btnValue}</button>
              <p>
                {pText}{" "}
                <span><br />
                  <Link to={`${cPassword ? "/login" : "/signup"}`}>
                    {" "}
                    {spanText}
                  </Link>{" "}
                </span>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Acccount;
