import React from 'react';
import {Link} from 'react-router-dom';
function UsernameForm(){
	return(

		<div>
	        <h2>Choose your Username!</h2>
	        <form method="POST" action="/submitusername">
	            <div>
	                <input type="text" name="username" placeholder="username" />
	            </div>
	            <div>
	            	<Link to='/PartyForm'>
	            		<button type="submit">Choose my username!</button>
	            	</Link>
	                
	            </div>
	        </form>		
		</div>
	);
}

export default UsernameForm;
