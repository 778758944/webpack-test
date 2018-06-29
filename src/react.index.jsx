import React, { Component } from 'react'
import { render } from 'react-dom'

class A extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {

	}

	render() {
		return <div>this is Component A</div>
	}
}

console.log(<A><div>this is component a</div></A>);
render(<A/>, document.getElementById("root"));


