import React from 'react';

import {api} from '../Services/api';

export default class PersonList extends React.Component {
  state = {
    hero: []
  }

  componentDidMount() {
    api.get('/69')
      .then(res => {
        const hero = res.data;
        this.setState({ hero });
      })
  }

  render() {
    return (
      <ul>
        {this.state.hero.map(characters => <li>{characters.name}</li>)}
      </ul>
    )
  }
}