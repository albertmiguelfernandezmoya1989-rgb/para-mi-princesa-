// === CLONAR CORAZONES ===
$(function() {
  const $love = $('.heart').first();
  for (let i = 0; i < 4; i++) {
    $('.hearts-bg').append($love.clone());
  }
});

// === CONTADOR DESDE 6 OCTUBRE 2025 A LAS 12:35:45 ===
const fechaInicio = new Date("2025-10-06T12:35:45");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  if (diferencia < 0) return;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  $("#dias").text(dias.toString().padStart(2, '0'));
  $("#horas").text(horas.toString().padStart(2, '0'));
  $("#minutos").text(minutos.toString().padStart(2, '0'));
  $("#segundos").text(segundos.toString().padStart(2, '0'));
}
setInterval(actualizarContador, 1000);
actualizarContador();

// === FRASES ROMÁNTICAS ROTATIVAS ===
const frases = [
  "Cada segundo contigo vale una eternidad 💫",
  "Eres mi lugar favorito del mundo 💜",
  "Te amo más de lo que las palabras pueden decir 💖",
  "Gracias por ser mi razón de sonreír 🌸",
  "Contigo, todo tiene sentido ✨",
  "Tus abrazos son mi lugar seguro 🫶",
  "El tiempo vuela cuando estoy contigo ⏳",
  "Eres mi hoy y todos mis mañanas 🌅",
  "Desde que llegaste, todo es mejor 💞",
  "Tu sonrisa ilumina incluso mis días grises ☀️",
  "Amarte es mi parte favorita de la vida ❤️",
  "Cada día contigo se siente como magia 🌈",
  "Eres mi principio, mi fin y todo lo que hay entre ellos 💌"
];

let indice = 0;
const fraseEl = document.getElementById("frase");

function cambiarFrase() {
  fraseEl.classList.remove("visible");
  setTimeout(() => {
    fraseEl.textContent = frases[indice];
    fraseEl.classList.add("visible");
    indice = (indice + 1) % frases.length;
  }, 600);
}

fraseEl.textContent = frases[0];
fraseEl.classList.add("visible");
indice = 1;

setInterval(cambiarFrase, 5000);

// === CARTA EMERGENTE ===
function abrirCarta() {
  const overlay = document.getElementById("overlayCarta");
  overlay.style.display = "flex";
}

function cerrarCarta() {
  const overlay = document.getElementById("overlayCarta");
  overlay.style.display = "none";
}