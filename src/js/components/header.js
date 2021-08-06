const headertext = document.querySelector("#header");


export default function header() {
    headertext.innerHTML = `
    <nav style="text-align:center">
        <nav_tag id="slotsNav">
            <a href="games/slots/slots.html" style="display:inline-block;">Slots</a>
        </nav_tag>
        <nav_tag id="blackjackNav">
            <a href="games/blackjack/blackjack.html">Blackjack</a>
        </nav_tag>
        <nav_tag id="rouletteNav">
            <a href="games/roulette/roulette.html">High Stakes Roulette</a>
        </nav_tag>
        <nav_tag id="crapsNav">
            <a href="games/craps/craps.html">CRUD Craps 💩</a>
        </nav_tag>
    </nav>
    <hr/>
    `;/*`
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
    `;*/
}