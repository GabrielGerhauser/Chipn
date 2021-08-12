const headertext = document.querySelector("#header");


export default function header() {
    headertext.innerHTML = `
    <nav> 
        <ol>
            <li id="slotNav" class= "gamenav">Slots</li>
            <li id="blackjackNav" class= "gamenav">Blackjack</li>
            <li id="rouletteNav" class= "gamenav">High Stakes Roulette</li>
            <li id="crapsNav" class= "gamenav">CRUD Craps 💩</li>
        </ol>
    </nav>
    `;
}