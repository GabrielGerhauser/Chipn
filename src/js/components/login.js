// const loginForm = document.createElement("form");
// loginForm.id = "login-form";
// loginForm.style.display = "absolute";
// loginForm.innerHTML = `
//     <label for="login-username">Username: </label>
//     <input type="text" id="login-username" />
//     <label for="login-password">Password: </label>
//     <input type="password" id="login-password" />
//     <button id="login-cancel">Cancel</button>
//     <button id="login-submit" type="submit">Submit</button>
// `;



export default function displayLoginForm(){
    // const loginForm = document.createElement("form");
    // loginForm.id = "login-form";
    // loginForm.style.display = "absolute";
    // loginForm.innerHTML 
    const loginForm = `
    <form id="login-form">
        <label for="login-username">Username: </label>
        <input type="text" id="login-username" />
        <label for="login-password">Password: </label>
        <input type="password" id="login-password" />
        <button id="login-cancel">Cancel</button>
        <button id="login-submit" type="submit">Submit</button>
    </form> 
    `;
    return loginForm;
}