import React from 'react';
import api from '../utils/gitApi.js';
import {RepoContainer} from './RepoContainer.js'

export class ListOfRepos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: '' };
  }

  componentDidMount() {
    api.getRepos(this.props.userName)
      .then(res => {
        let repos = res.map((repo) => {
          return(
            <RepoContainer key={repo.id} repo={repo}/>
          )
        })
        this.setState({ repos : repos });
      });
    }
  render() {
    return (
      <ul>{this.state.repos}</ul>
    );
  }
}
