import axios from 'axios';

const KEY = 'AIzaSyCwTunS4iMTlIMhkIUqjftH0L4VQnuafxg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});