import PropTypes from 'prop-types';

const User = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
});

export default User;
