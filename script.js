// Typing animation
const texts = ["Cyber Security Student"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1200);
  } else {
    setTimeout(type, 100);
  }
}
type();

// Fade-in animation when scrolling
const fadeElements = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  fadeElements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const winHeight = window.innerHeight;
    if (pos < winHeight - 100) {
      el.classList.add('visible');
    }
  });
});
