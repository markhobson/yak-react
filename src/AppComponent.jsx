var React = require("react");
var YakList = require("./YakList");

var AppComponent = React.createClass({
	render: function() {
		var yaks = [
			{id: 1, name: "A"},
			{id: 2, name: "B"},
			{id: 3, name: "C"}
		];
		return (
			<div>
				<h1>Yak Shaving</h1>
				<YakList yaks={yaks}/>
			</div>
		);
	}
});

module.exports = AppComponent;
