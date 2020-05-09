import React from 'react';
import {Link} from 'react-router-dom';

import { signInWithGoogle } from '../auth/fire';

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
			<button onClick={ () => signInWithGoogle() }>Google Signin</button>
		</div>
	);
}

export default UsernameForm;
