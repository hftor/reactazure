import React, { Component } from 'react';

export class RepoContainer extends Component {
  render() {
    return (
      <div>
        {this.props.repo.language}
      </div>
    );
  }
}
