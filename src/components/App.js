import React from 'react';
import {RouteHandler} from 'react-router';

var App = React.createClass({

    render: function () {
        return (
                <RouteHandler {...this.props}/>
                );
    }
});

module.exports = App;