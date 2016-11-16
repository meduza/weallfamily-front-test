import APP from '../../../components/App/constants'
export const logout = () => {
    document.cookie = 'test=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    document.cookie = 'test_login=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    return {
        type: APP.LOGOUT
    }
}
/**
 * Действие нажатия на кнопку
 */
export const login = (uid, login) => {
    return {
        type: APP.LOGIN,
        uid: uid,
        login: login
    }
}

export const loginAsync = (username, password)  => dispatch => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/src/components/Login/fixtures/fixtures.json');
    xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
    xhr.onsuccess = ()=>{
        let data;
        try {
            data = JSON.parse(xhr.responseText);
        } catch (e){
            throw Error(e);
        }
        dispatch(login(data.uid, username));
    }
    xhr.send();
}
