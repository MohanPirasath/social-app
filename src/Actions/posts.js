
import * as api from "../Api/indexs.js"


 export const getPosts = () => async(dispatch)=>{
try{
    const {data} = await api.fetchPosts()
        dispatch({type:"FETCH_ALL", payload:data})
}catch(error){
        console.log(error.message,"Action>posts")

}


    // const action = {type: "FETCH_ALL", payload:[]}
    // dispatch(action);
}