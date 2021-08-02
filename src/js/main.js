import slots from "./games/slots";
import header from "./components/header";
import footer from "./components/footer";

const startBtn = document.getElementById("control");
startBtn.addEventListener("click", function() {

})

export default() => {
    console.log("Hell world.");
    slots();
    footer();
    header();
}
