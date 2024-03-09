const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoechar = document.querySelector(".header-mobile nav button")
const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharmenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")

}

function fecharmenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}