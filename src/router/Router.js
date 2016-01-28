import {create as createRouter} from 'react-router';
import routes from './routes';

var _router = null;
var RouterContainer = {
    set: function(router) {
        _router = router;
    },
    get: function() {
        return _router;
    }
};
RouterContainer.set(createRouter({routes}));
module.exports = RouterContainer.get();