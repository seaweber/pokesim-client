import React from 'react';
import {Link} from 'react-router-dom';
function PartyForm(){
	return(

		<div>
			<form method="POST" action="/generateparty">
	           <div>
	           	    <input type="text" name="pokemon1" placeholder="Pokemon 1" />
	                <input type="text" name="pokemon2" placeholder="Pokemon 2" />
	                <input type="text" name="pokemon3" placeholder="Pokemon 3" />
	                <input type="text" name="pokemon4" placeholder="Pokemon 4" />
	                <input type="text" name="pokemon5" placeholder="Pokemon 5" />
	                <input type="text" name="pokemon6" placeholder="Pokemon 6" />	
	           </div>

	           
	            <div>
	            	<Link to='/abislam/pokemon-frontend'>
	            		<button type="submit">Choose my Pokemon!</button>
	            	</Link>
	                
	            </div>
	        </form>
	        <form method="POST" action="/generaterandomparty">
	            <div>
	            	<Link to='/abislam/pokemon-frontend'>
	            		<button type="submit">I want random Pokemon!</button>
	            	</Link>
	                
	            </div>
	        </form>			
		</div>
	);
}

export default PartyForm;
