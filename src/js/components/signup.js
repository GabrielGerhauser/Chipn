import {accountURL} from "../api/actions";
import {setCookie} from "../utilities/cookie";

export function displaySignupForm(){
    // const signupForm = document.createElement("form");
    // signupForm.id = "signup-form";
    // signupForm.style.display = "absolute";
    // signupForm.innerHTML 
    const signupForm = `
        <label for="signup-username">Username: </label>
        <input type="text" id="CreateAccount_UserName" />
        <label for="signup-email">Email: </label>
        <input type="email" id="CreateAccount_Email" />
        <label for="signup-age">Age: </label>
        <input type="number" id="CreateAccount_Age" />
        <label for="signup-password">Password: </label>
        <input type="password" id="CreateAccount_Password" />
        <input type="hidden" id="CreateAccount_ChipCount" value="500">
        <button id="signup-cancel">Cancel</button>
        <button id="signup-submit">Submit</button>
    `;
    return signupForm;
}

export function createAccount_Submit()
{
    let RequestBody={
        UserName:CreateAccount_UserName.value,
        Email:CreateAccount_Email.value,
        Age:CreateAccount_Age.value,
        Password:CreateAccount_Password.value,
        ChipCount:CreateAccount_ChipCount.value
    };
    fetch(accountURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(RequestBody)
    }).then(response => response.json()).then(data => {
        setCookie("UserId", data.id, .1);
        location.reload();
    });
}