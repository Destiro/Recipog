/**
 * Given the users login and password, check if this is valid
 * so that the user can create a new account.
 *
 * @param login
 * @param password
 * @param users
 * @returns {boolean}
 * @constructor
 */
export default function CheckLogin(login, password, users){
    let isValidName = false;
    if (login !== '' && password !== '') {
        for(let i=0; i<users.length; i++){
            if(users[i].username === login && users[i].password === password){
                isValidName = true;
            }
        }
    }

    return isValidName;
}
