import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../actions/postAction'
import PostCard from './PostCard'

function PostList({ posts }) {
    const auth = useSelector(state => state.auth)

    const dispatch = useDispatch()
    useEffect(() => {
        if (auth.user)
            dispatch(getPosts())
    }, [])
    return (
        <div className="feed">
            {posts && posts.map(post => <PostCard post={post} />)}

        </div>
    )
}

export default PostList
