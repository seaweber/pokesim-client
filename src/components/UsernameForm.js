import React from 'react';

function UsernameForm(){
	return(

		<div>
	        <h2>Choose your Username!</h2>
	        <form method="POST" action="/submitusername">
	            <div>
	                <input type="text" name="username" placeholder="username" />
	            </div>
	            <div>
	                <button type="submit">Choose my username!</button>
	            </div>
	        </form>		
		</div>
	);
}

export default UsernameForm;
