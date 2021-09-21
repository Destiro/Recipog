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
