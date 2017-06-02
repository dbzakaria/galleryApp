
export default function photos(state={
        photos: [],
        details: [],
    }, action) {
    console.log(state);
    switch (action.type) {

        case "GET_PHOTOS":
            return {...state, photos: action.photos }

        //case "GET_PHOTO_DETAILS":
            //return {...state, details: action.details }
      
        default:
            return state
    }
}
