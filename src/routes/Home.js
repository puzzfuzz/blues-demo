import React, { Component } from 'react';
import { getDogs } from "../api/DogAPI";
import bluesAPI from '../api/BluesAPI';
import DogView from "../components/DogView/DogView";
import DogViewLoading from "../components/DogView/DogViewLoading";



export default class Home extends Component {
  state = {
    heroDog: null
  };


  componentDidMount() {
    this.loadHero();
  }

  loadHero = async () => {
    const heroDogResponse = await getDogs(1);
    const heroDog = (heroDogResponse && heroDogResponse.length) && heroDogResponse[0];

    this.setState({ heroDog });
  };

  render() {
    const { heroDog } = this.state;

    return (
      <div>
        {heroDog ? (
          <DogView dog={heroDog} />
        ): (
          <DogViewLoading/>
        )}
      </div>
    )
  }
}
