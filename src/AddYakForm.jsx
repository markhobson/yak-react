var React = require("react");

var AddYakForm = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Shave a yak</h2>
				<input placeholder="What's next?"/>
				<button>Shave</button>
			</div>
		);
	}
});

module.exports = AddYakForm;
