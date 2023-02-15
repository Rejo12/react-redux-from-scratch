import React from "react";

const AppLayout=()=>{

	return(
		<div className="wrapper"> 
			<div className="layoutContainer">
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

export default AppLayout;