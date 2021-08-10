const signupForm = document.createElement("form");
signupForm.id = "signup-form";
signupForm.style.display = "absolute";
signupForm.innerHTML = `
    <label for="signup-username">Username: </label>
    <input type="text" id="signup-username" />
    <label for="signup-email">Email: </label>
    <input type="email" id="signup-email" />
    <label for="signup-age">Age: </label>
    <input type="number" id="signup-age" />
    <label for="signup-password">Password: </label>
    <input type="password" id="signup-password" />
    <input type="hidden" id="signup-chipcount" value="500">
    <button id="signup-cancel">Cancel</button>
    <button id="signup-submit" type="submit">Submit</button>
`;