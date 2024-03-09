const botaoAbrir = document.querySelector(".header > button")
const botaofechar = document.querySelector(".eader nav button")
const body = document.querySelector("body")
const nav = document.querySelector("header .mobile")

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