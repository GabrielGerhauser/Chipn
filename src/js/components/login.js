import {loginURL} from "../api/actions";

export function displayLoginForm(){
    const loginForm = `
        <p class='text-danger' id='loginResponse'></p>
        <label for="login-username">Username: </label>
        <input type="text" id="LoginAccount_UserName" />
        <label for="login-password">Password: </label>
        <input type="password" id="LoginAccount_Password" />
        <button id="login-cancel">Cancel</button>
        <button id="login-submit">Submit</button>

    `;
    return loginForm;
}

export function loginAccount_Submit()
{
    let RequestBody={
        UserName:LoginAccount_UserName.value,
        Password:LoginAccount_Password.value
    };

    console.log(RequestBody);
    console.log(LoginAccount_UserName.value);
    console.log(LoginAccount_Password.value);

    fetch(loginURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.json()).then(data => {
        // setCookie("UserName", data.userName, .1);
        console.log("returned data: " + data);
        console.dir(data);
        if(data.status == "404"){
            document.getElementById("loginResponse").innerHTML = "Your username or password does not match our records.";
        }else{
            //do something with Cookies
        }
        //setCookie("UserId", data.id, .1);
    });
}