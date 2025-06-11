// Função responder botões
function responder(tipo) {
  const resposta = document.getElementById('resposta');
  if (tipo === 'sim') {
    resposta.textContent = 'Eu sabia que você diria sim! 😍';
  } else if (tipo === 'claro') {
    resposta.textContent = 'Eu te amo meu amor! 💕';
  }
  // Fogos de artifício
  confetti();
}

// Corações caindo no canvas
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 100; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1,
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    ctx.font = `${heart.size}px Arial`;
    ctx.fillStyle = '#ff69b4';
    ctx.fillText('❤', heart.x, heart.y);
    heart.y += heart.speed;
    if (heart.y > canvas.height) {
      heart.y = 0;
      heart.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawHearts);
}
drawHearts();

// Confetes simples simulador
function confetti() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    console.log('🎉 Confetti! 🎊');
  }, 250);
}

// Contagem regressiva personalizada para revelar surpresa
let segundos = 10;
const countdownEl = document.getElementById('countdown');
const surpresaEl = document.getElementById('surpresa');

const timer = setInterval(() => {
  if (segundos > 0) {
    countdownEl.textContent = `Segredo será revelado em ${segundos} segundos...`;
    segundos--;
  } else {
    clearInterval(timer);
    countdownEl.style.display = 'none';
    surpresaEl.classList.remove('hidden');
  }
}, 1000);

// Efeito de digitação (no <p id="typing">)
const texto = "Você ilumina meus dias, me faz sorrir com as coisas mais simples, e estar com você é o que eu mais quero...";
let index = 0;

function typingEffect() {
  if (index < texto.length) {
    document.getElementById('typing').innerHTML += texto.charAt(index);
    index++;
    setTimeout(typingEffect, 100);
  }
}

typingEffect();

// Galeria - abrir modal
function openModal(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'block';
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Ajusta canvas tamanho na janela redimensionada
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
