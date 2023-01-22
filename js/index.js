/*

IMPORTANT: os "consts" tem que estar na parte de cima do código do js! Só está assim para treinamento de lógica.

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - passo 2 - dar um jeito de indentificar quando o usuário clicar no botão
    - passo 3 - dar um jeito de pegar o elemento modal no js
    - passo 4 - abrir modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

- passo 1 - dar um jeito de pegar o elemento fechar modal udando js
- passo 2 - dar um jeito de indentificar quando o usuário clicar no X
- passo 3 - fechar a modal

*/

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");

// passo 2 - dar um jeito de indentificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir modal na tela
    modal.classList.toggle("aberto");
    video.setAttribute("src", linkDoVideo)

});

// passo 3 - dar um jeito de pegar o elemento modal no js
const modal = document.querySelector(".modal");

// OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal
// passo 1 - dar um jeito de pegar o elemento fechar modal udando js
const botaoFecharModal = document.querySelector(".fechar-modal");

// passo 2 - dar um jeito de indentificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal
    modal.classList.toggle("aberto");
    video.setAttribute("src", "")
});

const video = document.getElementById("video");

const linkDoVideo = video.src;

function arternarModal() {
    modal.classList.toggle("aberto");
}

