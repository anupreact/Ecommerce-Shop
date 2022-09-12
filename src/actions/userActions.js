import { usersData } from "../Data/SampleData";

export  const registerUser = (user)=>  (dispatch)=>{
    dispatch({ type : "USER_REGISTER_REQUEST"})
    console.log(user)
    try {
        const response =  usersData.push(user);
        console.log(usersData);
        
        // const response = await axios.post("url" , {user}) 
        // console.log( 'response --- ', response)
        dispatch({ type :"USER_REGISTER_SUCCESS"  })
    } catch (error) {
        dispatch({ type :"USER_REGISTER_FAILED" , payload:error})
    }
}