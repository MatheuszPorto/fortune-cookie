const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookieButton = document.querySelector(".cookieButton")
const openedCookieButton = document.querySelector(".openedCookieButton")

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

cookieButton.addEventListener("click", toggleScreen)
openedCookieButton.addEventListener("click", toggleScreen)