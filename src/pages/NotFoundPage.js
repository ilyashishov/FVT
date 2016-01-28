import React from 'react';

var NotFoundPage = React.createClass({

    render: function () {
        return (
            <div>
                <h1>404</h1>
                <p>Страница не найдена</p>
                <p><a href="/">Главная</a></p>
            </div>
        );
    }
});

module.exports = NotFoundPage;