const accountURL = "https://localhost:44336/api/Account/";
const gameURL = "https://localhost:44336/api/Game/";
const accountGameURL = "https://localhost:44336/api/AccountGame/";

// export function checkAccount(userId, password) {
//     let isValid;
//     fetch(accountURL + userId).then(response => response.json()).then(data => {
//         if(data.password === password)
//         {
//             isValid = true;
//         } else
//         {
//             isValid = false;
//         }
        
//     });
// }

// export async function getAccount(accountId)
// {
//     const response = await fetch(accountURL + accountId);
//     return await response.json();
// }

export function getAccount(accountId, callback)
{
   fetch(accountURL + accountId)
   .then(response => response.json())
   .then(data => {callback(data)});
}


// export function getAccount(accountId) {
//     return fetch(accountURL + accountId).then(function(response) {
//         return response.json();
//     }).then(function(json) {
//         return json;
//     });
// }

