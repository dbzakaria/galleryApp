
export default function photos(state={
        photos: [],
    }, action) {

    switch (action.type) {

        case "GET_PHOTOS":
            return {...state, photos: action.photos }

        default:
            return state
    }
}
