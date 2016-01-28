require('./css/style.less');

window.$ = window.jQuery = require('jquery');
require('bootstrap/js/dropdown');
require('bootstrap/js/collapse');
import React from 'react';
import Router from './router/Router';

Router.run((Handler, state)=> {
    React.render(<Handler {...state}/>, document.body);
});
