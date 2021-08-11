import {loginURL} from "../api/actions";


export function displayLoginForm(){
    const loginForm = `
    <form id="login-form">
        <label for="login-username">Username: </label>
        <input type="text" id="LoginAccount_UserName" />
        <label for="login-password">Password: </label>
        <input type="password" id="LoginAccount_Password" />
        <button id="login-cancel">Cancel</button>
        <button id="login-submit" type="submit">Submit</button>
    </form> 
    `;
    return loginForm;
}

export function loginAccount_Submit()
{
    let RequestBody={
        UserName:LoginAccount_UserName.value,
        Password:LoginAccount_Password.value
    };
    fetch(loginURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.json()).then(data => {
        setCookie("UserName", data.UserName, .1);
        setCookie("UserId", data.Id, .1);
    });
}