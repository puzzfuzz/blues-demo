import React from 'react';
import DogPT from "../../proptypes/DogPT";

import './DogView.css';

const DogView = ({ dog }) => {

  const { url } = dog;

  return (
    <img src={url} alt={'Puppy!'} className="Dog__item" />
  );

};

DogView.propTypes = {
  dog: DogPT
};

export default DogView;
