import {
    ADDPOST_FAIL,
    GET_POSTS
} from '../actions/types'

let initialState = {
    posts: [],
    isLoading: false,
    errors: {}
}

const postReducer = (state = initialState, action) => {
    console.log(action,GET_POSTS)
    switch (action.type) {
        case GET_POSTS:
            console.log({
                ...state,
                posts: action.payload,
                isLoading: false,
                errors: {}
            })
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
                errors: {}
            }
            case ADDPOST_FAIL:
                return {
                    ...state,
                    isLoading: true,
                    errors: action.payload
                }


            default:
                return state
    }
}

export default postReducer