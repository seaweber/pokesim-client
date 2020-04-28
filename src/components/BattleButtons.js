import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';


function BattleButtons (){

	const style = {
		margin: '1em'
	}
	return (
		<div>
			<Link to='/battlepage'>
				<Button variant="danger"  style= {style}>Fight</Button>
			</Link>
		</div>


	)
}

export default BattleButtons;
