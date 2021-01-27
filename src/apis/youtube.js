import axios from 'axios';

const KEY = 'AIzaSyBfyelloL7ykjZ5RiBwFziqf9CiIMNw0jU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY

    }
});