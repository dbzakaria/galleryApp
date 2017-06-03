
export default function albums(state={
        albums: [],
        albumFirstPhoto: null
    }, action) {

    switch (action.type) {

        case "GET_ALBUMS":
            return {...state, albums: action.albums }

        case "GET_ALBUM_FIRST_PHOTO":
        	return {...state, albumFirstPhoto: action.albumFirstPhoto }
            
        default:
            return state
    }
}
