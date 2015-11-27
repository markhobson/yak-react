var React = require("react");

var YakList = React.createClass({
	render: function() {
		var yakNodes = this.props.yaks.map(function(yak) {
			return (
				<li key={yak.id}>{yak.name}</li>
			);
		});
		return (
			<div>
				<h2>Yaks</h2>
				<ul>
					{yakNodes}
				</ul>
			</div>
		);
	}
});

module.exports = YakList;
