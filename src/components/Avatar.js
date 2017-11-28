import React from 'react';
import api from '../utils/gitApi.js';

export class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { avatarUrl: '' };
  }

  componentDidMount() {
    api.getImage(this.props.userName)
      .then(res => {
        this.setState({ avatarUrl : res });
      });
    }
  render() {
    return (
      <img
        src={this.state.avatarUrl}
        alt={this.props.userName}/>
    );
  }
}
