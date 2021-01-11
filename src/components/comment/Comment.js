import React from 'react';

function Comment(props) {
  return (
    <React.Fragment>  
          <dt className="comment-data" id='c{props.id}'>
        At {props.dateTime}, {props.author} said...
      </dt>
      <dd className="comment-body">
        <p>{props.comment}</p>
      </dd>
    </React.Fragment>
  );

}

export default Comment;