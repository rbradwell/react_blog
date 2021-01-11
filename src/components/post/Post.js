import React from 'react';
import { Link } from "react-router-dom";

function Post(props) {
    //https://medium.com/better-programming/what-is-dangerouslysetinnerhtml-6d6a98cbc187
      return (
          <React.Fragment>
           <Link to='/' title="external link" className="title-link">
            <h3 className="post-title">
              {props.title}
            </h3>
          </Link>
          <div className="post-body">
            <p dangerouslySetInnerHTML={{
                    __html: props.body
                }}>
            </p>
          </div>
          <p className="post-footer">
            <em>posted by {props.author} @ <Link to='/' title="permanent link">{props.time}</Link></em> &nbsp;
              <Link className="comment-link" to={ { pathname : `/post/${props.postIndex}/comments`, param1: `postId` }  }>{props.no_of_comments} comments</Link>
          </p>
          </React.Fragment>
      );

}

export default Post;