import * as FETCH from "../api/actions";

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

// export function populateAccountDiv() {
//     // const fetchedAccount = FETCH.getAccount(userAccount.Id).then((result) => {
//     //     console.log(result);
//     // });

//     if(userAccount == null)
//     {
//         accountDiv.innerHTML = `
//             <button id="account-login">Log In</button>
//             <button id="account-signup">Sign Up</button>
//         `;
//         return accountDiv;
//     } else
//     {
//         FETCH.getAccount(userAccount.Id, data => {
//             // console.log(data);
//             if(data.password == userAccount.Password) {
//                 console.log("Success");
//                 accountDiv.innerHTML =`
//                 Name: ${userAccount.UserName}<br />
//                 Chip Count: ${userAccount.ChipCount}
//                 `;
//                 return accountDiv;
//             } else {
//                 console.log("Fail");
//             }
//         });
//     }
// }

