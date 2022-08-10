import Posts from "../components/Posts/Posts"
import { FETCH_ALL,DELETE,UPDATE,LIKE,CREATE } from "../constants/actionTypes";

export default  (Posts=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
                return action.payload;
        case DELETE:
                return Posts.filter((post)=>post._id !== action.payload)
        case UPDATE:
        case LIKE:
                return Posts.map((post)=>post._id=== action.payload._id?action.payload : post);
        case CREATE:
            return [...Posts,action.payload]
        default:
            return Posts;
    }
}