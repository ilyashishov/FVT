import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Slider from '../components/imgSlider/Slider';

var AppPage = React.createClass({

    render: function () {
        return (
                <div>
                    {false ? ('') :
                            ( <div>
                                <header>
                                    <Slider />
                                </header>
                                <div className="container-fluid content">
                                    <RouteHandler {...this.props}/>
                                </div>
                                <footer>

                                </footer>
                            </div>
                            )}
                </div>
        );
    }
});

module.exports = AppPage;