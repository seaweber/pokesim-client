import React from 'react';
import Button from 'react-bootstrap/Button';
function BattleButtons (){

	const style = {
		margin: '1em'
	}
	return (
		<div>
			<Button variant="danger"  style= {style}>Attack</Button>
			<Button variant="success" style= {style}>Heal</Button>
			<Button variant="warning" style= {style}>Run</Button>
		</div>


	)
}

export default BattleButtons;
