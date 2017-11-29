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
        className="Avatar-image"
        src={this.state.avatarUrl}
        alt={this.props.userName}/>
    );
  }
}
