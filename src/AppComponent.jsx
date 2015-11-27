var React = require("react");
var YakList = require("./YakList");

var AppComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Yak Shaving</h1>
				<YakList/>
			</div>
		);
	}
});

module.exports = AppComponent;
