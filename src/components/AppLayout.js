import React from "react";
import { connect } from "react-redux";
import Actions from "../Action.js/GameAction";

const AppLayout=(props)=>{
	const handleHamBurgerClicked=()=>{
		props.hamburgerClicked(true)
	}
	console.log(props)

	return(
		<div className="wrapper"> 
			<div className="layoutContainer">
				<div className="icon-hamburger" onClick={handleHamBurgerClicked}>
					<li></li>
					<li></li>
					<li></li>
				</div>
				<div style={{justifySelf: 'end'}}>
					<h1 className="fontWt400 glowyText">
                React-Redux
					</h1>
				</div>
				<div className="loginDetails">
					<p>Logged in as <strong>Rejo</strong></p>
				</div>
			</div>
		</div>
 
	);
};


const mapDispatchToProps=(dispatch)=>({
	hamburgerClicked:(selectionValue)=>{
		dispatch(Actions.hamburgerClicked(selectionValue))
	}
})
export default connect(null,mapDispatchToProps)(AppLayout);