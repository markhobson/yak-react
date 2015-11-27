var React = require("react");

var Yak = React.createClass({
	render: function() {
		return (
			<span>{this.props.yak.name}</span>
		);
	}
});

module.exports = Yak;
