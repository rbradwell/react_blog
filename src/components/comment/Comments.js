import React from 'react';
import Comment from "./Comment";
function Comments(props) {
    const comments = props.comments.map((comment) => {
      return <Comment 
              key={comment.id} 
              id={comment.id} 
              dateTime={comment.dateTime} 
              author={comment.author} 
              comment={comment.comment}/>
    });
  return (
    <React.Fragment>
      {comments}
    </React.Fragment>
  );
}

export default Comments;