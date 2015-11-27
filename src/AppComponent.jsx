var React = require("react");
var AddYakForm = require("./AddYakForm");
var YakList = require("./YakList");

var AppComponent = React.createClass({
	getInitialState: function() {
		return {
			yaks: [
				{id: 1, name: "A"},
				{id: 2, name: "B"},
				{id: 3, name: "C"}
			],
			nextId: 4
		};
	},
	handleYakAdd: function(yak) {
		var state = this.state;
		state.yaks.push({id: state.nextId++, name: yak.name});
		this.setState(state);
	},
	render: function() {
		return (
			<div>
				<h1>Yak Shaving</h1>
				<AddYakForm onAdd={this.handleYakAdd}/>
				<YakList yaks={this.state.yaks}/>
			</div>
		);
	}
});

module.exports = AppComponent;
