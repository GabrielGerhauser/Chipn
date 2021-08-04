let deckId = "";

function newDeck() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then(response => response.json())
    .then(data => {deckId = data.deck_id; console.log(deckId);});
    
}

const newDeckButton = document.getElementById("new-deck");
newDeckButton.addEventListener("click", function() {newDeck();});

function drawCards(count) {
    fetch ("https://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count="+count)
    .then(response => response.json())
    .then(data => {
        let cardsDrawn = [];
        for(let i=0; i < data.cards.length; i++) {
            cardsDrawn.push(data.cards[i].code);
        }
        console.log(cardsDrawn);
        addToPile("playerHand", cardsDrawn);
        fetch("https://deckofcardsapi.com/api/deck/"+deckId+"/pile/playerHand/list/").then(response => response.json()).then(data => console.log(data.piles.playerHand))
    })
}

function addToPile(pileName, cards) {
    let cardsAsString = cards.join(',');
    fetch("https://deckofcardsapi.com/api/deck/"+deckId+"/pile/"+pileName+"/add/?cards="+cardsAsString)
    .then(response => response.json());
}

const drawButton = document.getElementById("draw-card");
drawButton.addEventListener("click", function() {
    let cards = drawCards("2");
    // console.log(cards);
    // let cardsAsString = cards.join(',');
    // addToPile("playerHand", cardsAsString);
});