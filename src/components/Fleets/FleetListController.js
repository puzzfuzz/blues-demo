import React from 'react';
import PropTypes from 'prop-types';

import Fleet from "../../proptypes/Fleet.pt";
import FleetListItem from './FleetListItem';


const FleetListController = ({
  fleetsFetched,
  fleets
}) => {

  console.log(fleets);

	return (
		<div>
      FLC
      <div>{fleetsFetched}</div>
      <div>
        {fleets && fleets.length
          ? (fleets.map((f) => <FleetListItem key={`f_${f.id}`} fleet={f} />))
          : <div>Loading</div>
        }
      </div>
		</div>
	);
};

FleetListController.propTypes = {
  fleetsFetched: PropTypes.bool.isRequired,
  fleets: PropTypes.arrayOf(Fleet)
};

export default FleetListController;
