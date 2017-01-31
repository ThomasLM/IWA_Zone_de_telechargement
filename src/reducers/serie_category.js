export default function(state=null, action){
    switch(action.type) {
        case "CATEGORY_SERIE_CLICKED":
            return action.payload;
            break;
    }
    return state;
}