
import * as api from "../Api/indexs"
// import { DELETE } from "../constants/actionTypes"
import { FETCH_ALL,CREATE,UPDATE,DELETE } from "../constants/actionTypes"

 export const getPosts = () => async(dispatch)=>{
try{
    const {data} = await api.fetchPosts()
        dispatch({type:FETCH_ALL, payload:data})
}catch(error){
        console.log(error.message,"Action>posts")

}



    // const action = {type: "FETCH_ALL", payload:[]}
    // dispatch(action);
}

export const createPost = (post) => async(dispatch)=>{
    try{
        const {data}=await api.createPost(post)

        dispatch({type:CREATE,payload:data})

    }catch(error){
            console.log(error.message,"Action on 27")
    }
}

export const updatePost = (id,post) => async (dispatch) =>{
    try{
       const {data}= await api.updatePost(id,post)
       dispatch({type:UPDATE,payload:data})
    }catch(error){
        console.log(error.message,"action post in 36")
    }
}

export const deletePost =(id)=>async (dispatch) =>{
    try{
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id})
    }catch(error){
        console.log(error.message,"action post on 45")
    }
}

export const likePost = (id) => async (dispatch) =>{
    try{
       const {data } = await api.likePost(id)
       dispatch({type:UPDATE,payload:data})

    }catch(error){
        console.log(error.message,"action post on 55")

    }
}