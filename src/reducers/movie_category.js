export default function(state=null, action){
    switch(action.type) {
        case "CATEGORY_MOVIE_CLICKED":
            return action.payload;
            break;
    }
    return state;
}