var React = require("react");
var AddYakForm = require("./AddYakForm");
var YakList = require("./YakList");

var AppComponent = React.createClass({
	handleYakAdd: function(yak) {
		// TODO: add yak
	},
	render: function() {
		var yaks = [
			{id: 1, name: "A"},
			{id: 2, name: "B"},
			{id: 3, name: "C"}
		];
		return (
			<div>
				<h1>Yak Shaving</h1>
				<AddYakForm onAdd={this.handleYakAdd}/>
				<YakList yaks={yaks}/>
			</div>
		);
	}
});

module.exports = AppComponent;
