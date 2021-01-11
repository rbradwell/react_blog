import React from 'react';
import { Link } from "react-router-dom";

function Sidebar(props) {
    const links = props.links.map((link) => {
        return <li key={link.id}><a target="`_blank" href={link.link}>{link.title}</a></li>
    });
    const summary = props.items.slice(0,2).map((post) => {
        return <li key={post.id}><Link to={ { pathname : `/post/${post.id}/comments`, param1: `postId` }  }>{post.title}</Link></li>;
    });
  return (
    <div id="sidebar">
      <div id="profile-container"> <h2 className="sidebar-title">About Me</h2>
          <dl className="profile-datablock">
          <dd className="profile-data">
              <strong>Name:</strong>Gustavo Amigo </dd>
          <dd className="profile-data">
              <strong>Location:</strong>S&atilde;o Paulo, SP, Brazil </dd>
          </dl>
          </div>
      <div className="box"><div className="box2"><div className="box3">
        <h2 className="sidebar-title">Links</h2>
        <ul>{links}</ul>
        <h2 className="sidebar-title">Previous Posts</h2>
        <ul id="recently">
          {summary}
        </ul>
        <h2 className="sidebar-title">Meta</h2>
        <Link to='/login'>Admin</Link>
      </div></div></div>
    </div>
  );

}

export default Sidebar;