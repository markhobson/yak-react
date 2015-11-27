var React = require("react");

var YakList = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Yaks</h2>
				<ul>
					<li>A</li>
					<li>B</li>
					<li>C</li>
				</ul>
			</div>
		);
	}
});

module.exports = YakList;
