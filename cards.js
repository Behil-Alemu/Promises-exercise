let url = 'https://deckofcardsapi.com/api/deck/new/draw/'

axios
  .get(url)
  .then(c1 => {console.log(`${c1.data.cards[0].value} of ${c1.data.cards[0].suit}`);
  })


let allCards = [];

for (let i = 1; i < 2; i++) {
  allCards.push(
    axios.get(url)
  );
}
Promise.race(allCards)
  .then(c2 => {
    console.log(`${c2.data.cards[0].value} of ${c2.data.cards[0].suit}`)
  })
  .catch(err => console.log(err)) 

$(function(){
let deckId= null
let btn = $('button')
let cardArea = $('#card-area')
$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/')
    .then(data =>{
        deckId = data.deck_id
        console.log(deckId)
        btn.show();
    }); 
    btn.on('click',  function(){
        $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`)

        .then(data => {
            console.log(data)
            cardArea.append(`<img  src="${data.cards[0].image}"></img>`)
            
        })
    })

});