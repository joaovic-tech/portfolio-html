console.log("Hello world i'm João  👨‍💻ϟ");

/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) { /* abrir */
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) { /* fechar */
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}