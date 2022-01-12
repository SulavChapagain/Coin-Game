// var word = ['Rock', 'Paper', 'Scissor'];
// var words = word[Math.floor(Math.random()*word.length)];
// alert('The computer chose:' + word);

let btn = document.querySelector("#HEAD");
let coin = document.querySelector(".coin-value");

const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)];

let choice = pickOne(["Himal.gif", "map.gif"]);
coin.src = choice

btn.addEventListener("click", ()=>{
    location.reload();
})
