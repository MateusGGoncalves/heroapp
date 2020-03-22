import React from 'react';
import {api} from '../Services/api';
import './Hero.css';

export default class PersonList extends React.Component {
  state = {
    heroes: [],
    imagem: [],
    powerstatus: [],
    biografia: [],

  }

  componentDidMount() {
    api.get('/686')
      .then(res => {
        const heroes = res.data;
        const imagem = res.data.image;
        const powerstatus= res.data.powerstats;
        const biografia = res.data.biography;
        this.setState({ heroes});
        this.setState({ imagem });
        this.setState({ powerstatus });
        this.setState({ biografia });
      });
  }

  render() {
    var arr = []
    arr.push(this.state.heroes)
    var arr1 = []
    arr1.push(this.state.imagem)
    var arr2 = []
    arr2.push(this.state.powerstatus)

    return  (
      <div className="HeroDiv">
        {arr.map(hero => <p>{hero.name} ({hero.id})</p>)}
        {arr1.map(hero2 => <img width="275vh" src={hero2.url} alt="batman"/>)}
        <div className="Status">
        {arr2.map(hero3 => <div><p>Inteligência:{hero3.intelligence} Força:{hero3.strength}</p>
         <p>Velocidade:{hero3.speed} Defesa:{hero3.durability}</p> <p>Poder:{hero3.power} Combate:{hero3.combat}</p></div>)}
        </div>
      </div>
    )
  }
}