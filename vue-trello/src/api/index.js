import axios from 'axios'
import router from '../router'

const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401;
const onUnauthoroized = () => {
    router
        .push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
        .catch(()=>{});
}

const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data
    })
        .then(result => result.data)
        .catch(error => {
            // console.log(error.response);
            const {status} = error.response
            if(status === UNAUTHORIZED) onUnauthoroized();
            throw error.response;
        })
}

export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}

// Vuex store.js로 기능 이동!
// const {token} = localStorage;
// if(token) setAuthInHeader(token);

export const board = {
    fetch() {
        return request('get', '/boards');
    },
    create(title) {
        return request('post', '/boards', { title });
    }
}

export const authorizer = {
    login(email, password) {
        return request('post', '/login', {email, password});
    }
}