var React = require('react');
var App = require('./components/App.js');

module.exports = React.render(
	React.createElement(App),
	document.getElementById('toolbar')
	);