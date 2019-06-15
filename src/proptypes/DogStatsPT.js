import PropTypes from 'prop-types';

const DogStatsPT = PropTypes.shape({
  imperial: PropTypes.string.isRequired,
  metric: PropTypes.string.isRequired
});

export default DogStatsPT;
