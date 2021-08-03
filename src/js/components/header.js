const headertext = document.querySelector("#header");


export default function header() {
    headertext.innerHTML = `
    <nav> 
        <ol>
            <li id="slotsNav" class= "gamenav">
                <a href="games/slots/slots.html">Slots</a>
            </li>
            <li id="blackjackNav" class= "gamenav">
                <a href="games/blackjack/blackjack.html">Blackjack</a>
            </li>
            <li id="rouletteNav" class= "gamenav">
                <a href="games/roulette/roulette.html">High Stakes Roulette</a>
            </li>
            <li id="crapsNav" class= "gamenav">
                <a href="games/craps/craps.html">CRUD Craps 💩</a>
            </li>
        </ol>
    </nav>
    `;
}