import PropTypes from 'prop-types';

const Fleet = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firmware: PropTypes.string.isRequired,
  devices: PropTypes.arrayOf(PropTypes.number).isRequired,
  owner: PropTypes.number.isRequired,
  name: PropTypes.string
});

export default Fleet;
