import axios from "axios"

// require( 'dotenv' ).config();
const KEY = "AIzaSyBJOe2oDqBq3bdG8mneBhNg1NbziDPKhLQ"

export default axios.create( {
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
} );
