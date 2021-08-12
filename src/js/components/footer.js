const todaysDate = new Date(Date.now());
const footertext = document.querySelector("#footer");

export default function footer() {
    footertext.innerHTML = `
    <hr/>
     &copy; ${todaysDate.getFullYear()} LIT MINISTRIES!!🖕
    `;
    
}