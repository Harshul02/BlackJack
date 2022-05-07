let cards =[];
let sum=0;
let hasBlack=false;
let hasAlive=false;
let message="";
let messageEL=document.getElementById("message-el");
let sumEL=document.querySelector("#sum-el");
let cardEL=document.getElementById("card-el");
let playerName = "Per";
let playerChips = 145;

let palyerEL = document.getElementById("player-el");
palyerEL.textContent = playerName + ": $" + playerChips;

function getrandomCard()
{
    let randomNumber= Math.floor(Math.random()*13)+1; 
    if(randomNumber>10)
        return 10;
    else if(randomNumber === 1)
        return 11;
    else
        return randomNumber;
}

function startGame()
{
    hasAlive=true;
    let firstCard = getrandomCard();
    let secondCard = getrandomCard();
    cards= [firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}

function renderGame()
{
    cardEL.textContent="Cards: ";
    for(let i=0; i<cards.length; i++)
    {
        cardEL.textContent+=cards[i] + " ";
    }
    sumEL.textContent="Sum: " + sum;
    if(sum<=20)
        message="Do you want to draw a new card?";
    else if(sum===21){
        message="You've got Blackjack!";
        hasBlack=true;
    }
    else{
        message="You're out of game";
        hasAlive=false;
    }

    messageEL.textContent=message;
}

function newCard()
{
    if(hasAlive === true && hasBlack === false){
    let card =getrandomCard();
    sum+=card;
    cards.push(card);
    renderGame();
    }
}