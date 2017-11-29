import React from 'react';
import api from '../utils/gitApi.js';

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
            <div key={repo.id}>
              {repo.language}
            </div>
          )
        })
        this.setState({ repos : repos });
      });
    }
  render() {
    return (
      <div>{this.state.repos}</div>
    );
  }
}
