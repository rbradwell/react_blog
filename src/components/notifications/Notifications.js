import React from 'react';

function Notifications({ errors}) {
  let count = 0;
  const err = errors.map((error) => {
    count++;
    return <p key={{ count }} style={{ color: 'red' }}>{error}</p>
  });
  return (
    <React.Fragment>  
    <div id="messages">
      {err}
    </div>
    </React.Fragment>
  );

}

export default Notifications;