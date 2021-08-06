const quotes = [
    {quote: '"The mind is everything. What you think you become."',
    quoter: "Buddha" },
    {quote: '"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end."',
    quoter: "Aristotle"},
    {quote: '"We must balance conspicuous consumption with conscious capitalism."',
    quoter: "Kevin Kruse"},
    {quote: '"Do what you can, where you are, with what you have."',
    quoter: "Teddy Roosevelt"},
    {quote: '"We become what we think about."',
    quoter: "Earl Nightingale"}
];

const hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let quote = document.getElementById('quote');
let speaker = document.getElementById('speaker');
let btn = document.getElementById('btn');
let mainColor = document.querySelector('body');


function start(){

    let i = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[i].quote;
    speaker.innerHTML = quotes[i].quoter;

    changeColor();

}


function changeColor(){
    let hexStr = "#";
    for(let j = 0; j < 6; j++){
        let i = Math.floor(Math.random() * hexArray.length);
        hexStr += hexArray[i];
    }

    document.querySelector('body').style.backgroundColor = hexStr;
    document.querySelector('#btn').style.backgroundColor = hexStr;
    document.querySelector('.main-box').style.color = hexStr; 
    document.querySelector('.quoter-name-box p').style.color = hexStr;  

}  

function changeQuote() {

    let i = Math.floor(Math.random() * quotes.length);
    
    if(quotes[i].quote === quote.innerHTML){
        if(i + 1 < quotes.length && i + 1 >= 0){
            i += 1;
        } else if(i - 1 < quotes.length && i - 1 >= 0){
            i -= 1;
        }
    }

    quote.innerHTML = quotes[i].quote;
    speaker.innerHTML = quotes[i].quoter;
    
}

function changeColorAndQuote(){
    changeColor();
    changeQuote();
}

/*-----------function calls-------------*/

start();

btn.addEventListener('click', changeColorAndQuote);
