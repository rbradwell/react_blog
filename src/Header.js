import React from 'react';

function Header(props) {
  return (
    <div id="header"><div>

      <h1 id="blog-title">
        {props.title}
      </h1>
      <p id="description">{props.description}</p>
    
    </div></div>
  );

}

export default Header;