import account from "./account";
import nav from "./nav";

const headerContent = document.querySelector("#site-header");

export default function header() {
    headerContent.appendChild(account());
    headerContent.appendChild(nav());
    headerContent.appendChild(document.createElement("hr"));
}