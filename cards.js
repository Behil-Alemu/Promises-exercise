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

async function setup(){
    let btn = $('button')
    let cardArea = $('#card-area')
    let cardsShuffled= axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')

    
    

    btn.show().on('click', 
    async function(){
        axios.get(`https://deckofcardsapi.com/api/deck/${cardsShuffled.deck_id}/draw/`)
        
        .then(c1 => {cardArea.append(`<img  src="${c1.data.cards[0].image}"></img>`)})
        console.log(c1)
    }
    )
    
}
