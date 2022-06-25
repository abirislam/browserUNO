let unoCard = {
    color: null,
    type: null,
    value: null
}

let userCards = []
let handEl = document.getElementById("hand")
let startEl = document.getElementById("start-btn")
startEl.addEventListener('click', () => {
    startEl.style.display = 'none';
})

function startGame() {
    renderGame()
}

function renderGame() {
    for (let i = 0; i < 7; i++) {
        drawCard()
    }
}

function drawCard() {
    let newCard = generateCard()
    userCards.push(newCard)
    hand.textContent += newCard.color + " " + newCard.type + " "+ newCard.value
}



// 25 red, 25 blue, 25 green, 25 yellow, 8 black
// then decide type
// then decide number if applicable
function generateCard() {
    let cardCol = Math.floor(Math.random() * 109)
    if (cardCol <= 24) {
        unoCard.color = "red"
    } else if (25 <= cardCol <= 49) {
        unoCard.color = "blue"
    } else if (50 <= cardCol <= 74) {
        unoCard.color = "green"
    } else if (75 <= cardCol <= 99) {
        unoCard.color = "yellow"
    } else {
        unoCard.color = "black"
    }

    let cardType = Math.floor(Math.random() * 25)
    if (unoCard.color === "red" || unoCard.color === "blue" || unoCard.color === "yellow" || unoCard.color === "green") {
        if (cardType < 19) {
            unoCard.type = "number"
        } else if (19 < cardType < 21) {
            unoCard.type = "skip"
        } else if (21 < cardType < 23) {
            unoCard.type = "reverse"
        } else {
            unoCard.type = "drawTwo"
        }
    }

    if (unoCard.color === "black") {
        // value 1 is wild card, value 2 would be wild +4
        unoCard.value = Math.floor(Math.random()*2) + 1
    }

    if (unoCard.type === "number") {
        unoCard.value = Math.floor(Math.random() * 10)
    }

    return unoCard
}