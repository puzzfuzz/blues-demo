import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import DogPT from "../../proptypes/DogPT";
import DogView from "./DogView";


const DogCard = ({ dog }) => {

	return (
		<Card>
      <CardContent>
        <DogView dog={dog} />
      </CardContent>
    </Card>
	);
};

DogCard.propTypes = {
  dog: DogPT
};

export default DogCard;
