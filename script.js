const button = document.querySelector("button")
var quote = document.querySelector(".quote")
var autor = document.querySelector(".autor")

button.onclick = ()=>generateQuote()

var quotesArray = [{content:"God is in the details.", autor:"– Mies van der Rohe"},
{content:"Form ever follows function.", autor:"Louis Sullivan"},
{content:"Recognizing the need is the primary condition for design.", autor:"Charles Eames"},
{content:"Architecture is the learned game, correct and magnificent, of forms assembled in the light.", autor: "Le Corbusier"},
{content:"When I’m working on a problem, I never think about beauty. But when I’ve finished, if the solution is not beautiful I know it’s wrong.", autor: "Buckminster Fuller"},
{content:"An idea is salvation by imagination.", autor: "Frank Lloyd Wright"},
{content:"Less is more.", autor: "Mies van der Rohe"},
{content:"Not many architects have the luxury to reject significant things.", autor: "Rem Koolhaas"}]

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



