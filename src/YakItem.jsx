var React = require("react");

var YakItem = React.createClass({
	render: function() {
		return (
			<span>{this.props.yak.name}</span>
		);
	}
});

module.exports = YakItem;
