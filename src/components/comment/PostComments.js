import React from 'react';

import Post from "../post/Post";
import Comments from "./Comments";
import AddComment from "./AddComment";
import {Link, useParams} from "react-router-dom";

const PostComments = ({ onCommentSubmit, blog }) => {
    const { postId } = useParams();
    let post = blog.items[Number(postId)-1];
    return (
        <React.Fragment>
            <p>{'\u00A0'}{'\u00A0'}<Link to='/'>{'<<back'}</Link></p>
            <div className="post">
                <Post
                    key={post.id}
                    postIndex={post.id}
                    title={post.title}
                    body={post.body}
                    author={post.author}
                    permalink={post.permalink}
                    time={post.time}
                    no_of_comments={post.comments.length} />
                    <dl id="comments-block">
                        <Comments comments={post.comments} />
                        <AddComment postIndex={post.id} onCommentSubmit={onCommentSubmit} />
                    </dl>
                </div>
            </React.Fragment>
        )
}

export default PostComments;
