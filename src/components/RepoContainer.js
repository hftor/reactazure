import React, { Component } from 'react';

export class RepoContainer extends Component {
  render() {
    return (
      <li>
        {this.props.repo.language}
      </li>
    );
  }
}
