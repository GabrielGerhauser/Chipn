// import * as FETCH from "../api/actions";

// // let userAccount = localStorage.getItem("userAccount");
// let userAccount = { Id : "1", UserName : "ChipnAdministrator", ChipCount : "5000", Email : "admin@chipn.gov", Password : "NoneOfYourBusiness", Age : "21" };
// // let userId = userAccount.Id;

// export function createAccountDiv() {
//     let accountDiv = document.createElement("div");
//     accountDiv.id = "account";
//     accountDiv.style.float = "right";
//     accountDiv.innerHTML = " ";
//     return accountDiv;
// }

// // export function populateAccountDiv() {
// //     // const fetchedAccount = FETCH.getAccount(userAccount.Id).then((result) => {
// //     //     console.log(result);
// //     // });

// //     if(userAccount == null)
// //     {
// //         accountDiv.innerHTML = `
// //             <button id="account-login">Log In</button>
// //             <button id="account-signup">Sign Up</button>
// //         `;
// //         return accountDiv;
// //     } else
// //     {
// //         FETCH.getAccount(userAccount.Id, data => {
// //             // console.log(data);
// //             if(data.password == userAccount.Password) {
// //                 console.log("Success");
// //                 accountDiv.innerHTML =`
// //                 Name: ${userAccount.UserName}<br />
// //                 Chip Count: ${userAccount.ChipCount}
// //                 `;
// //                 return accountDiv;
// //             } else {
// //                 console.log("Fail");
// //             }
// //         });
// //     }
// // }



import * as FETCH from "../api/actions";
import displayLoginForm from "./login";
import displaySignupForm from "./signup";

// let userAccount = localStorage.getItem("userAccount");
let userAccount = { Id : "1", UserName : "ChipnAdministrator", ChipCount : "5000", Email : "admin@chipn.gov", Password : "NoneOfYourBusiness", Age : "21" };
// let userId = userAccount.Id;

export function createAccountDiv() {
    let accountDiv = document.createElement("div");
    accountDiv.id = "account";
    accountDiv.style.float = "right";
    accountDiv.innerHTML = " ";
    return accountDiv;
}

export function populateAccountDiv() {
    const accountDiv = document.getElementById("account");
    if(userAccount == null)
    {
        accountDiv.innerHTML = `
            <button id="account-login">Log In</button>
            <button id="account-signup">Sign Up</button>
        `;
        // return accountDiv;
    } else
    {
        FETCH.getAccount(userAccount.Id, data => {
            console.log(data);
            if(data.password == userAccount.Password) {
                console.log("Success");
                accountDiv.innerHTML =`
                Name: ${data.userName}<br />
                Chip Count: ${data.chipCount}
                `;
                // return accountDiv;
            } else {
                console.log("Fail");
                accountDiv.innerHTML = `
                    <button id="account-login">Log In</button>
                    <button id="account-signup">Sign Up</button>
                `;
            }
        });
    }
}

export function displayAccountForms(){
    const accountDiv = document.getElementById("account");

    const loginButton = document.getElementById("account-login");
    const signupButton = document.getElementById("account-signup");

    if(signupButton && loginButton)
    {
        signupButton.addEventListener('click', () => {
            accountDiv.innerHTML = displaySignupForm();
        });

        loginButton.addEventListener('click', () => {
            accountDiv.innerHTML = displayLoginForm();
        });
    }
}