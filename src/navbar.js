async function loadNavbar() {
    const navbarContainer = document.getElementById("navbar"); // Seleciona o container onde a navbar será carregada
  
    try {
      // Busca o arquivo navbar.html
      const response = await fetch("/pages/navbar.html");
      
      // Verifica se o arquivo foi carregado com sucesso
      if (!response.ok) {
        throw new Error("Erro ao carregar a navbar");
      }
  
      // Converte o conteúdo da resposta em texto
      const navbarHTML = await response.text();
  
      // Insere o conteúdo da navbar no container
      navbarContainer.innerHTML = navbarHTML;
  
      // Reaplica os eventos necessários (ex.: botão hambúrguer)
      const hamburger = document.getElementById("hamburger");
      const menu = document.getElementById("menu");
  
      hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        hamburger.classList.toggle("open"); // Anima o botão hambúrguer
      });
    } catch (error) {
      console.error(error); // Exibe um erro caso algo dê errado
    }
  }
  
  // Chama a função para carregar a navbar
  loadNavbar();
  