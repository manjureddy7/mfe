import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../action-creators";
import { Link } from "react-router-dom";

const Posts = () => {

    const {posts, loading} = useSelector(store => store.posts);
    const dispatch = useDispatch();

    return(
        <div>
            <h3>Posts</h3>
            <br />
            <Link to="/">home</Link>
            <button onClick={() => dispatch(getPosts())}>Get Posts</button>
            {loading && <h3>Fetching posts...!!</h3>}
            {posts.length > 0 ? (
                <ul>
                {posts.map(post => (
                <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            ): <p>No posts found!</p>}
            
        </div>
    )
}

export default Posts;