
export default function albums(state={
        albums: [],
    }, action) {

    switch (action.type) {

        case "GET_ALBUMS":
            return {...state, albums: action.albums }
      
        default:
            return state
    }
}
