
const num =8
const nums = [9,5,2]
let url = `http://numbersapi.com/${num}?json`;

// `${url}/${num}?json`

axios.get(url)
    .then(res => {
        console.log("FIRST PROMISE RESOLVED!")
       $('#fav').append(`<li>${res.data.text}</li>`)
    })
    .catch(err => console.log(err))


// axios.get(`http://numbersapi.com/${nums}?json`)

//     .then(res => {
//         console.log("FIRST PROMISE RESOLVED!")
//         console.log(res.data)
//         $('#allFav').append(`<li>${res.data}</li>`)
//     })

const myNum =[]
for (let n of nums){
       myNum.push(
         axios.get(`http://numbersapi.com/${n}?json`)
         
       );
       
     }

Promise.all(myNum)
  .then(res => {
      for(r of res){
       $('#allFav').append(`<li>${r.data.text}</li>`)   
      }
  })
  .catch(err => console.log(err)) 


const myNumFact =[]
for (let i = 1; i < 5; i++){
    myNumFact.push(
      axios.get(`http://numbersapi.com/${num}?json`)
      
    );
}
    

Promise.all(myNumFact)
  .then(res => {
    for (let r in res){
        $('#allFact').append(`<li>${res[r].data.text}</li>`)   
        console.log(res)
       }
   })
  .catch(err => console.log(err)) 
    




// how can I solve this without Async wait.
