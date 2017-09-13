/**
 * Created by huangling on 18/05/2017.
 */

require('babel-register');
var Home = require('./containers/Home.js');

module.exports = {
    path: '/',
    component: Home,
    //routes[0]
    indexRoute: {
        onEnter: (nextState, replace) => {
            replace('/home')
        }
    },
    childRoutes: [ {
        childRoutes: [
            require('./containers/About')
        ],
    } ]
};