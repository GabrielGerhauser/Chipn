// let userAccount = localStorage.getItem("userAccount");
let userAccount = "jack";

export default function account() {
    if(userAccount == null) {
        let accountDiv = document.createElement("div");
        accountDiv.id = "account";
        accountDiv.style.float = "right";
        accountDiv.innerHTML = `
            <span id="slotsNav"> Login </span>
            
        `;
        return accountDiv;
    } else {

        let accountDiv = document.createElement("div");
        accountDiv.id = "account";
        accountDiv.style.float = "right";
        accountDiv.innerHTML = `
            <span id="slotsNav"> Logout </span>
            
        `;
        return accountDiv;
    }
}