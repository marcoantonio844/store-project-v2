const prevbutton = document.getElementById('prev');
const nextbutton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dot = document.querySelectorAll('.dot');
const numberindicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  document.querySelector('.item.active').classList.remove('active');
  document.querySelector('.dot.active').classList.remove('active');

  if (direction > 0) {
    active++;
    if (active === total) active = 0;
  } else if (direction < 0) {
    active--;
    if (active < 0) active = total - 1;
  }

  items[active].classList.add('active');
  dot[active].classList.add('active');
  numberindicator.textContent = String(active + 1).padStart(2, '0');
}

clearInterval(timer);
timer = setInterval(() => {
  update(1);
}, 5000);

prevbutton.addEventListener('click', () => update(-1));
nextbutton.addEventListener('click', () => update(1));

// REDIRECIONAMENTO "Saiba Mais"
const saibaMaisBtns = document.querySelectorAll('.btm');
const saibaMaisLinks = [
  'apple-watch.html',
  'airpods-max.html',
  'vision-pro.html'
];

saibaMaisBtns.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    window.location.href = saibaMaisLinks[index];
  });
});
