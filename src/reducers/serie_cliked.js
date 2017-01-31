export default function(state=null, action){
    switch(action.type) {
        case "SERIE_CLICKED":
            return action.payload;
            break;
    }
    return state;
}