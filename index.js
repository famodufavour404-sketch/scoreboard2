let home = 0
let guest = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function giveScore() {
    homeEl.textContent = home
    guestEl.textContent = guest
}

function homeadd(points) {
    home += points
    giveScore()
}

function guestadd(points) {
    guest += points
    giveScore()
}

function reset() {
    home = 0
    guest = 0
    giveScore()


    homeEl.classList.add("reset-blink")
    guestEl.classList.add("reset-blink")

    setTimeout(() => {
        homeEl.classList.remove("reset-blink")
        guestEl.classList.remove("reset-blink")
    }, 350)
}

giveScore()


                                                                                                                                                                                                                    