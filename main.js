// Variables

const Game = {score: 0, direction: "right", highscore: parseInt(localStorage.highscore), snake: [], objects: {points: [], powerups: []}}
let ChangeDir = true

let FrenzyInterval
let WallInterval
let InvincibleInterval

// When document is loaded...

document.addEventListener("DOMContentLoaded", function() {
    // Scores

    const score = document.getElementById("score")
    const highscore = document.getElementById("highscore")

    if (!Game.highscore || isNaN(Game.highscore)) {
        Game.highscore = 0
    }

    update_scores()

    // Start overlay effect

    const title = document.getElementById("start_title")
    const buttons = document.getElementById("start_buttons")

    setTimeout(function() {
        title.innerText = "super snake"
    }, 300)
    setTimeout(function() {
        buttons.style.display = "block"
    }, 600)

    // Event listeners

    start_listeners()
    help_listeners()
    game_listeners()
    game_over_listeners()
})