import React from 'react';
import PropTypes from 'prop-types';

import Fleet from "../../proptypes/Fleet.pt";
import FleetListItem from './FleetListItem';


const FleetList = ({
  fleetsFetched,
  showFleet,
  fleets
}) => {

	return (
    <div>
      {fleets && fleets.length
        ? (fleets.map((f) => <FleetListItem key={`f_${f.id}`} fleet={f} showFleet={showFleet} />))
        : <div>Loading</div>
      }
    </div>
	);
};

FleetList.propTypes = {
  fleetsFetched: PropTypes.bool.isRequired,
  showFleet: PropTypes.func.isRequired,
  fleets: PropTypes.arrayOf(Fleet)
};

export default FleetList;
