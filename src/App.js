import React, { Component, Fragment } from 'react';

class ReturnTypes extends Component {
	render() {
		return 'hello';
	}
}

class App extends Component {
	render() {
		return (
			<>
				<ReturnTypes />
			</>
		);
	}
}

export default App;
