//alternancia da pagina (light ou  nao)

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  // html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  // }

  //alteração imagem
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // susbtituir a imagem
  img.setAttribute("src", "./assets/avatar-light.png")
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
