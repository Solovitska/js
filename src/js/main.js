// Вибираємо елемент canvas за класом "matrix"
const canvasEl = document.querySelector(".matrix");

// Встановлюємо розміри canvas відповідно до розмірів вікна
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

// Отримуємо 2D контекст для малювання на canvas
const ctx = canvasEl.getContext("2d");

// Встановлюємо розмір шрифту
const fontSize = 24;
ctx.font = `${fontSize}px Matrix`;

// Обчислюємо кількість стовпців на основі розмірів canvas та розміру шрифту
const colsNumbers = canvasEl.width / fontSize;

// Спеціальні символи для матриці
const chars = `1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./!@#$%^&*()_+`;

// Випадкова початкова позиція Y для кожного стовпця
const posY = [];
for (let i = 0; i < colsNumbers; i++) {
  posY[i] = -Math.round(Math.random() * 1000);
}

// Функція для малювання матриці
function matrix() {
  // Малюємо фон
  ctx.fillStyle = "rgba(0,0,0,0.09)";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  // Малюємо символи для кожного стовпця
  let x = 3;
  for (let i = 0; i < colsNumbers; i++) {
    ctx.fillStyle = "rgba(0,255,50,1)";
    ctx.fillText(getRandomChar(chars), x, posY[i]);
    x = x + fontSize;
  }

  // Зміщуємо позиції Y та перевіряємо, чи потрібно перезапустити символи зверху
  for (let i = 0; i < colsNumbers; i++) {
    posY[i] = posY[i] + fontSize;
    if (posY[i] > canvasEl.height + Math.round(Math.random() * 100)) {
      posY[i] = -Math.round(Math.random() * 1000);
    }
  }

  // Затримка і виклик функції для анімації
  setTimeout(matrix, 90);
}

// Запускаємо анімацію матриці
matrix();

// Оновлюємо розміри canvas при зміні розміру вікна
window.addEventListener("resize", changeCanvasSize);
function changeCanvasSize() {
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  
  // Заповнюємо фон чорним та перезавантажуємо сторінку
  ctx.fillStyle = "rgba(50,50,50,1)";
ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
location.reload();

}

// Малюємо чорний фон на початку


// Функція для отримання випадкового символу з заданого набору
function getRandomChar(chars) {
  const number = Math.random() * chars.length;
  return chars.charAt(number);
}