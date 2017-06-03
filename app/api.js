
import config from './config'; 

export default (function () {

    function getAlbums() {
        return fetch(config.ENDPOINTS.ALBUMS, {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(checkStatus)
        .then(parseJSON);
    }

    function getAlbumPhotos(album_id) {
        return fetch(config.ENDPOINTS.ALBUMS + '/' + album_id + '/photos' , {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(checkStatus)
        .then(parseJSON);
    }


    function parseJSON(response) {
        return response.json();
    }

    function checkStatus(response) {
        if (response.status >= 200 && response.status <= 499){
            return response;
        } else {
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            throw error;
        }
    }

    return {
        getAlbums,
        getAlbumPhotos
    };
}());
