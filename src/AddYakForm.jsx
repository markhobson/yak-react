var React = require("react");

var AddYakForm = React.createClass({
	getInitialState: function() {
		return {name: ""};
	},
	handleNameChange: function(event) {
		this.setState({name: event.target.value});
	},
	handleSubmit: function(event) {
		event.preventDefault();
		// TODO: add yak
	},
	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Shave a yak</h2>
				<input placeholder="What's next?" value={this.state.name}
					onChange={this.handleNameChange}/>
				<button>Shave</button>
			</form>
		);
	}
});

module.exports = AddYakForm;
