function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// HTML elementlerini seç
const controls = document.querySelector('.controls');
const input = document.querySelector('.input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Belirtilen sayıda kutu oluşturan fonksiyon
function createBoxes(amount) {
  // Tüm mevcut kutuları temizle
  destroyBoxes();

  let size = 30; // İlk kutunun boyutu
  let boxesHTML = ''; // Tüm kutuların HTML'ini saklayacak değişken

  for (let i = 0; i < amount; i++) {
    boxesHTML += `<div style="
      width: ${size}px;
      height: ${size}px;
      background-color: ${getRandomHexColor()};
      margin: 5px;
    "></div>`;
    size += 10; // Bir sonraki kutunun boyutunu artır
  }

  boxesContainer.innerHTML = boxesHTML; // Tüm kutuları tek seferde ekle
}

// Kutuları temizleyen fonksiyon
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Olay dinleyicileri ekle
createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("You can only enter a number between 1 and 100.")
  }
});

// Kutuları temizleyen callback fonksiyonlu olay dinleyicisi
destroyButton.addEventListener('click', destroyBoxes);
