import React from 'react';

const Message = (props) => {
  return (
    <li className="list-group-item">
      `{props.message.content}({props.message.author})`
    </li>
  );
};

export default Message;
