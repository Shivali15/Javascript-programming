// let firstcard = getRandomcard()
// let secondcard =getRandomcard()

//array 


// object
let player={
    name: "shivali umbarkar",
    chips:  145

}
let cards=[]  //array -ordered list of items
 let sum = 0
 let hasblackjack =false
 let isAlive =false
let message =" "
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

let playername= "shivali"
let playerchips =145

let playerEL = document.getElementById("player-el")

playerEL.textContent=player.name + ": $" + player.chips





function getRandomcard()
{
    // if 1 --> return 11
    // if 11-13  --> return  10
  let randomnumber=  Math.floor(Math.random()* 13) +1
  if(randomnumber>10)
  {
      return 10
  }else if(randomnumber ===1)
  {
      return 11
  }else{
      return randomnumber
  }
    
}
function startgame()
{
    isAlive=true
    // genrate 2 rando. no.
    // re-assign the cards amd sum variable so that the game can start
    let firstcard =getRandomcard()
    let secondcard = getRandomcard()
    cards =[firstcard,secondcard]
    sum = firstcard+ secondcard
    rendergame()
}

function rendergame(){

    cardsEl.textContent= "Cards: " 
 for(let i=0;i<cards.length;i++)
 {
     cardsEl.textContent += cards[i]+ " "
 }



    sumEl.textContent=  "Sum: " + sum
if (sum < 21)
{
message="Do you  want to draw a new card ?"
}
else if(sum === 21)
{
    message="Wohoo! You have got Blackjack!"
    hasblackjack= true
}
else if(sum>21)
{
    message="You are out of the game!"
    isAlive=false
}
messageEl.textContent=message
}
function newcard()
{
    console.log("drawing a new card from the deck!")
if(isAlive === true && hasblackjack===flase)
{
    let card =getRandomcard()

    sum += card
    cards.push(card)
    console.log(cards)
    rendergame()
}
}

