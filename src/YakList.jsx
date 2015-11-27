var React = require("react");

var YakList = React.createClass({
	render: function() {
		var yaks = [
			{id: 1, name: "A"},
			{id: 2, name: "B"},
			{id: 3, name: "C"}
		];
		var yakNodes = yaks.map(function(yak) {
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
