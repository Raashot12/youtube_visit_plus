import axios from "axios"

const KEY = 'AIzaSyDLlgAF53S3uZwc32j1599Ucl57UM56vGg'

export default axios.create( {
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
} );
