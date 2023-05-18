// Objetivo - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

//pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//Pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //verificar se o body ja tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {

        //remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        //trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        
        //adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});








