import Posts from "../components/Posts/Posts"


export default  (posts=[],action)=>{
    switch(action.type){
        case "FETCH_ALL":
                return posts
        case "FETCH_ALL":
            return posts
        default:
            return posts;
    }
}