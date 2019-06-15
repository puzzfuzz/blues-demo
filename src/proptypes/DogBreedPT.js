import PropTypes from 'prop-types';
import DogStatsPT from "./DogStatsPT";


const DogBreedPT = PropTypes.shape({
  weight: DogStatsPT,
  height: DogStatsPT,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  breed_group: PropTypes.string.isRequired,
  life_span: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired
});

export default DogBreedPT;
