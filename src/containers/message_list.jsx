import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '../components/message';

class MessageList extends Component {
  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.name} message={message} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
