import axios from "axios";



const instance = axios.create({
    baseURL: 'https://us-central1-challenge-3744f.cloudfunctions.net/api'
    // 'http://localhost:5001/challenge-3744f/us-central1/api'          --> The API (cloud function) URL
})


export default instance;