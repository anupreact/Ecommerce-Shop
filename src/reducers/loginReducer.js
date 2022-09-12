export const loginReducer = (state = { authUser: {} }, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authUser: action.payload,
      }; 

      case "LOGOUT_SUCCESS":
      return {
        ...state,
        authUser: [],   
      };

    default:
      return state;
  }
};
