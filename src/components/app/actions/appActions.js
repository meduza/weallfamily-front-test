//var appDispatcher = require('../dispatchers/appDispatcher');
//var APP = require('../constants/APP');

/**
 * Набор возможных действий
 * @type {{login: appActions.login, logout: appActions.logout}}
 */
var AppActions = {
    logout: function () {
        document.cookie = 'test=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        document.cookie = 'test_login=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        appDispatcher.dispatch({
            actionType: APP.LOGOUT
        });
    },
    /**
     * Действие нажатия на кнопку
     */
    login: function (uid, login) {
        appDispatcher.dispatch({
            actionType: APP.LOGIN,
            uid: uid,
            login: login
        });
    },
};

module.exports = AppActions;
