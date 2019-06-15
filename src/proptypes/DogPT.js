import PropTypes from 'prop-types';

import DogBreedPT from "./DogBreedPT";

const DogPT = PropTypes.shape({
  breeds: PropTypes.arrayOf(DogBreedPT),
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});

export default DogPT;
