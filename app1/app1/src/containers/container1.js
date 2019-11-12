import React, { Component } from 'react';

class Contianer1 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			stateprop1: "Our Initial State",
			stateProp2: 5
		}
	}

	// correct
	changeState = () => (
		this.setState((prevState, props) => ({ 
			stateprop2: prevState.stateProp2 + 1 })
	))

	render() {
		return (
			<div>
				<button onClick={() => this.changeState()}>Change State</button>
				{this.state.stateprop2}
			</div>
		)
	}
}

export default Contianer1;