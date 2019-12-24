import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import selectCity from '../actions/index';

const Message = (props) => {
  return (
    <li className="list-group-item">
      `{props.message.content}({props.message.author})`
    </li>
  );
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ selectCity }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(City);
export default Message;
