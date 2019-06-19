import React, {Component} from 'react';

import User from "../../proptypes/User.pt";

export default class UserListItem extends Component {
	static propTypes = {
	  user: User.isRequired
  };

	render() {
    const { id, name } = this.props.user;

		return (
			<div>
        <div>{id}</div>
        <div>{name}</div>
      </div>
		)
	}
}
