import React, { Component } from 'react';
import Component1 from '../functional/component1';

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
		this.setState(
			{
				stateProp2: this.state.stateProp2 + 1,
				stateprop1: this.state.stateprop1 + "L" 
			}
		)
	)

	changeState2 = () => (
		this.setState({stateprop1: this.state.stateprop1 + "L"})
	)

	render() {
		return (
			<div>
				<button onClick={() => this.changeState()}>Change State</button>
				<button onClick={() => this.changeState2()}>Change State 1</button>
				<br />
				<Component1 prop1={this.state.stateprop1} />
			</div>
		)
	}
}

export default Contianer1;