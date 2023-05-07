let slider = tns({
  container: ".my-slider",
  nav: false,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  loop: true,
  fixedWidth: 850,
  edgePadding: false,
  controls: false,
  responsive: {
    0: {
      fixedWidth: 280,
      gutter: 0,
      fixedHeight: true,
      items: 3,
    },
  },
});

// Seleciona todos os botões de navegação
const botaoNavegacao = document.querySelectorAll("a.botao-navegacao");

// Para cada botão de navegação, adicione um evento de clique
botaoNavegacao.forEach((botao) => {
  botao.addEventListener("click", (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link

    // Seleciona o id da sessão correspondente ao botão de navegação clicado
    const idSessao = botao.getAttribute("href");

    // Seleciona a sessão correspondente usando o id e rola a página para ela
    document.querySelector(idSessao).scrollIntoView({ behavior: "smooth" });
  });
});
