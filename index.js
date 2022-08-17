window.addEventListener('load', init)
 let time = 5
 let score = 0

 const seconds = document.getElementById('span')
 let wordToBeDisplayed = document.getElementById('word-displaying')
 const inputArea = document.querySelector('#input-area')
 const gameOver = document.querySelector('.game-over')
 const timeLeft = document.querySelector('.time')
 const scoreDisplay = document.querySelector('.score')

const words = [
    "automagically", "albeit", "arbitrary", "benchmark", "bargainous", "bromance", "buzzkill", "catasrophize", "colloquial", "conundrum",  "cheeseball", "chillax", "deferential", "dystopia", "eggcorn", "egregious", "empathetic", "existential", "facetious", "fortuitous", "frenemy", "green-collar", "hater", "heart", "homeshoring", "hypermiling", "inflammable", 
    "locavore", "matchy-matchy", "megachurch", "meme", "microblog", "modicum", "moot", "myraid", "nauseous", "nuance", "overleveraged", "paywall", "pimp", "penchant", "perfunctory", "plethora", "redundant", "riff", "sheeple", "soft-skills", "staycation", "travesty", "truthiness", "turducken", "unfriend", "umami", "vuvuzela", "webisode", 
]
function init() {
    ShowRandomWords(words)
}

function ShowRandomWords(words) {
    const randomWord = Math.ceil(Math.random() * words.length);
    wordToBeDisplayed.innerText = words[randomWord]
}
