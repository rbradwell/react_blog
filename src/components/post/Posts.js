import React from 'react';
import Post from "./Post";

function Posts({ blog }) {
    const posts = blog.items.map((post) => {
    return <div className="post" key={post.id}><Post
        postIndex={post.id} 
        title={post.title} 
        body={post.body} 
        author={post.author} 
        permalink={post.permalink} 
        time={post.time} 
        no_of_comments={post.comments.length} /></div>
    });
  return (
    <React.Fragment>
          {posts}
    </React.Fragment>
  );

}

export default Posts;