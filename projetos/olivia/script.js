const heartsContainer = document.getElementById("hearts");
const btnEntrar = document.getElementById("btnEntrar");
const btnMusica = document.getElementById("btnMusica");
const musica = document.getElementById("musica");

// TROQUE AQUI pelo nome da sua página principal
const paginaPrincipal = "bom.html";

const simbolos = ["❤", "💖", "💕", "💗", "💘"];

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 26 + "px";
  heart.style.animationDuration = 8 + Math.random() * 6 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 14000);
}

setInterval(criarCoracao, 450);

async function tocarMusica() {
  try {
    await musica.play();
    btnMusica.textContent = "Música tocando";
  } catch (erro) {
    btnMusica.textContent = "Toque novamente para ouvir ";
  }
}

btnMusica.addEventListener("click", tocarMusica);

btnEntrar.addEventListener("click", async () => {
  try {
    await musica.play();
  } catch (erro) {
    // segue mesmo se o navegador bloquear
  }

  window.location.href = paginaPrincipal;
});