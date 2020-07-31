const button = document.querySelector("button")
var quote = document.querySelector(".quote")
var autor = document.querySelector(".autor")

button.onclick = ()=>generateQuote()

var A = {content:"God is in the details.", autor:"– Mies van der Rohe"}
var B = {content:"Form ever follows function.", autor:"Louis Sullivan"}
var C = {content:"Recognizing the need is the primary condition for design.", autor:"Charles Eames"}
var D = {content:"Architecture is the learned game, correct and magnificent, of forms assembled in the light.", autor: "Le Corbusier"}
var E = {content:"When I’m working on a problem, I never think about beauty. But when I’ve finished, if the solution is not beautiful I know it’s wrong.", autor: "Buckminster Fuller"}
var F = {content:"An idea is salvation by imagination.", autor: "Frank Lloyd Wright"}
var G = {content:"Less is more.", autor: "Mies van der Rohe"}
var H = {content:"Not many architects have the luxury to reject significant things.", autor: "Rem Koolhaas"}

var quotesArray = [A,B,C,D,E,F,G,H]

function generateQuote(){
    let ramdomQuote = Math.floor(Math.random()*8) 
    let selectedQuote = quotesArray[ramdomQuote]
    quote.innerHTML = "Thinking...."
    autor.innerHTML =  "..."
        setTimeout( function(){
            quote.innerHTML = selectedQuote.content
            autor.innerHTML = selectedQuote.autor
        }, 1000)
}



