import Posts from "../components/Posts/Posts"


export default  (Posts=[],action)=>{
    switch(action.type){
        case "FETCH_ALL":
                return Posts
        case "FETCH_ALL":
            return Posts
        default:
            return Posts;
    }
}