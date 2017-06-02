
var api_hostname = "https://jsonplaceholder.typicode.com";


export default {
    app_name: 'GalleryApp',
    endpoint: api_hostname,
    ENDPOINTS: {
      ALBUMS: api_hostname + '/albums',
      PHOTOS: api_hostname + '/photos',
    }
}
