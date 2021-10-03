import axios from "axios"

const USER_KEY = "AIzaSyBJOe2oDqBq3bdG8mneBhNg1NbziDPKhLQ"

export default axios.create( {
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: USER_KEY
    }
} );
