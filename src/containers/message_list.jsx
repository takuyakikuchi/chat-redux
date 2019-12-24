import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import fetchMessages from '../actions/index';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.name} message={message} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group message-container">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps)(MessageList)(mapDispatchToProps);
