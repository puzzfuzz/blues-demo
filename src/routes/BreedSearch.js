import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import {getDogsByBreed} from "../api/DogAPI";
import DogCard from "../components/DogView/DogCard";

export default class BreedSearch extends Component {
  static propTypes = {
    query: PropTypes.string
  };

  static defaultProps = {
    query: null
  };

  state = {
    dogs: undefined,
    prevQuery: undefined
  };

  constructor(props) {
    super(props);

    if (props.query !== null) {
      this._loadDogs(this.props.query);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.query !== state.prevQuery) {
      return {
        dogs: null,
        prevQuery: props.query,
      };
    }

    return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.dogs === null) {
      this._loadDogs(this.props.query);
    }
  }

  _loadDogs = async (query) => {
    if (query === null) {
      return;
    }

    const dogs = await getDogsByBreed(query);
    this.setState({dogs});
  };

  render() {
    const {dogs} = this.state;
    const title = (dogs && dogs.length)
      ? dogs[0].breeds[0].name
      : '';


    if (dogs) {
      return (
        <div>
          <Typography variant="h1">{title}</Typography>
          {dogs.map((d, i) => <DogCard key={`d_${i}`} dog={d} />)}
        </div>
      );
    } else {
      return (
        <LinearProgress/>
      )
    }
  }
}
