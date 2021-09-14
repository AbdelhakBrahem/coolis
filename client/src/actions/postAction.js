import {
    ADDPOST_FAIL,
    GET_POSTS
} from './types'
import axios from 'axios'
import setToken from '../setToken'



export const addPost = (data) => (dispatch) => {
    console.log(data)
    setToken()
    axios.post('/post/createpost', data).then((res) => {
        dispatch(getPosts())
    }).catch((err) => {
        dispatch({
            type: ADDPOST_FAIL,
            payload: err.response.data.msg
        })
    })
}

export const getPosts = () => (dispatch) => {
    axios.get('/post/getpost').then((res) => {
        return dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    })
}