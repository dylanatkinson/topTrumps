const startButton = document.getElementById("start-btn");
const p1CardTitle = document.getElementById("p1-card-title");
const p2CardTitle = document.getElementById("p2-card-title");
const p1CardIntel = document.getElementById("p1-intel");
const p2CardIntel = document.getElementById("p2-intel");
const winnerIs = document.getElementById("winner");

class TopTrump {
    constructor(name, intelligence, morality, violence, notoriety, schwifty) {
        this._name = name;
        this._intelligence = intelligence;
        this._morality = morality;
        this._violence = violence;
        this._notoriety = notoriety;
        this._schwifty = schwifty;
    };
    get name() {
        return this._name;
    };
    get intelligence() {
        return this._intelligence;
    };
    get morality() {
        return this._morality;
    };
    get violence() {
        return this._violence;
    };
    get notoriety() {
        return this._notoriety;
    };
    get schwifty() {
        return this._schwifty;
    };
};


const deck = [
    rickSanchez = new TopTrump("Rick Sanchez", 99, 12, 55, 87, 96),
    scaryTerry = new TopTrump("Scary Terry", 40, 34, 98, 72, 16),
    mortySmith = new TopTrump("Morty Smith", 80, 73, 25, 34, 74),
    squanchy = new TopTrump("Squanchy", 55, 51, 31, 4, 1),
    summerSmith = new TopTrump("Summer Smith", 45, 31, 10, 73, 79),
    jerrySmith = new TopTrump("Jerry Smith", 59, 38, 9, 33, 60),
    bethSmith = new TopTrump("Beth Smith", 66, 69, 89, 71, 70),
    kingFlippyNips = new TopTrump("King Flippy Nips", 82, 70, 34, 40, 50),
    reverseGiraffe = new TopTrump("Reverse Giraffe", 56, 43, 94, 41, 16),
    presidentMorty = new TopTrump("President Morty", 71, 98, 87, 3, 25),
    mrMeeseeks = new TopTrump("Mr Meeseeks", 70, 5, 74, 65, 9),
    pickleRick = new TopTrump("Pickle Rick", 28, 21, 55, 2, 80),
    mrPoopybutthole = new TopTrump("Mr Poopybutthole", 60, 19, 65, 89, 6),
    tammyGueterman = new TopTrump("Tammy Gueterman", 77, 49, 12, 26, 19),
    snuffles = new TopTrump("Snuffles", 20, 46, 39, 41, 72),
    gearhead = new TopTrump("Gearhead", 89, 74, 64, 65, 29),
    councilOfRicks = new TopTrump("Council of Ricks", 96, 27, 38, 36, 32),
    doofusRick = new TopTrump("Doofus Rick", 3, 82, 31, 49, 96),
    principalVagina = new TopTrump("Principal Gene Vagina", 78, 99, 93, 61, 60),
    unity = new TopTrump("Unity", 97, 43, 87, 29, 91)
];


// generates a random order for deck variable
for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
};


let deckOne = deck.slice(0, 10);
let deckTwo = deck.slice(10, 20);

console.log(deckOne[0]);
console.log(deckTwo[0]);

const cardComparison = () => {
    if (deckOne[0].intelligence < deckTwo[0].intelligence) {
        const drawPile = deckOne.shift();
        const tempPile = deckTwo.shift();
        deckTwo.push(tempPile);
        deckTwo.push(drawPile);
    } else if (deckTwo[0].intelligence < deckOne[0].intelligence) {
        const drawPile = deckTwo.shift();
        const tempPile = deckOne.shift();
        deckOne.push(tempPile);
        deckOne.push(drawPile);
    };
};

const createCard = () => {
    p1CardTitle.textContent = deckOne[0].name;
    p2CardTitle.textContent = deckTwo[0].name;
    p1CardIntel.textContent = deckOne[0].intelligence;
    p2CardIntel.textContent = deckTwo[0].intelligence;
};

const winOrLose = () => {
    if (deckOne.length == 20){
        console.log("Player One Wins");
        winnerIs.textContent = "Player One Wins";
    } else if (deckTwo.length == 20) {
        console.log("Player Two Wins");
        winnerIs.textContent = "Player Two Wins";
    };
};

const endGame = () => {
    if (deckOne.length == 0 || deckTwo.length == 0){
        console.log("Game has ended");
        startButton.style.visibility = "hidden";
        winOrLose();
    };
};


startButton.addEventListener("click", () => {
    createCard();
    cardComparison();
    console.log(deckOne.length);
    console.log(deckTwo.length);
    endGame();
}); 