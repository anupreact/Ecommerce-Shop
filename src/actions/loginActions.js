export const login = (email) => (dispatch, getState) => {
  let user = email;

  if (user) {
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  }

  const authUser = getState().loginReducer.authUser;
  localStorage.setItem("authUser", JSON.stringify(authUser));
};

export const logout = (user) => (dispatch, getState) => {
    // let user = email;
  

      dispatch({ type: "LOGOUT_SUCCESS", payload: user });
 
  
    const authUser = getState().loginReducer.authUser;
    // localStorage.clear("authUser");
    localStorage.removeItem("authUser");
  };
