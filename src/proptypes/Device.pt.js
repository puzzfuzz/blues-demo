import PropTypes from 'prop-types';

const Device = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firmware: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  name: PropTypes.string,
});

export default Device;
