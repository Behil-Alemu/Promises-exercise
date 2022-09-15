$(function(){
let url = "https://pokeapi.co/api/v2/"
let randomPokemonPromises = [];


axios.get(`${url}pokemon/?limit=100`)
    .then(p => {
        console.log(p.data.results);
        for (let i = 1; i < 5; i++){
            
        }

      })

})