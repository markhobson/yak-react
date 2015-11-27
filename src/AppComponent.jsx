var React = require("react");
var AddYakForm = require("./AddYakForm");
var YakList = require("./YakList");

var AppComponent = React.createClass({
	getInitialState: function() {
		return {
			yaks: [],
			nextId: 1
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
				{this.state.yaks.length ? <YakList yaks={this.state.yaks}/> : ""}
			</div>
		);
	}
});

module.exports = AppComponent;
