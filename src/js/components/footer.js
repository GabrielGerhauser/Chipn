const todaysDate = new Date(Date.now());
const footertext = document.querySelector("#footer");

export default function footer() {
    footertext.innerHTML = `
    <hr/>
    <footer style="text-align:center">
    &copy; ${todaysDate.getFullYear()} LIT MINISTRIES!!
    </footer>
    `;
    
}