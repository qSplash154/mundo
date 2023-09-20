function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
// localizando o elemento retirar e setando a propriedade display, no none ele não aparece e no block aparece

  // pegar a tag img
  const img = document.querySelector("#ceu img")

  if (html.classList.contains("light")) {
    document.getElementById("retirar").style.display="block"
    document.getElementById("footer").style.display="block"
    document.getElementById("texto").style.display="none"
    img.setAttribute("src", "./imagens/LUA ANIMADA.png")
  } else {
    document.getElementById("retirar").style.display="none"
    document.getElementById("footer").style.display="none"
    document.getElementById("texto").style.display="block"
    img.setAttribute("src", "./imagens/sol icone.png")
  }
}
// renderização condicional - mostrar alguma coisa dependendo de sua condição - 


