var React = require("react");
var ReactDOM = require("react-dom");

var AppComponent = React.createClass({
	render: function() {
		return (
			<h1>Yak Shaving</h1>
		);
	}
});

ReactDOM.render(
	<AppComponent/>,
	document.getElementById("app")
);
