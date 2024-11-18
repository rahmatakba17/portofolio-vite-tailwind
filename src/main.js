// Import style.css dan setupCounter jika diperlukan
import './style.css';
import { setupCounter } from '../counter.js';

// Ambil elemen toggle, header, dan tombol close
const toggleBtn = document.getElementById('toggle-btn');
const mainHeader = document.getElementById('main-header');
const closeBtn = document.getElementById('close-btn');

// Event listener untuk tombol toggle header
if (toggleBtn && mainHeader && closeBtn) {
  toggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    mainHeader.classList.add('show'); // Mengganti 'translate-y-0' dengan 'show'
    toggleBtn.classList.add('hide');   // Mengganti 'hidden' dengan 'hide'
  });

  // Event listener untuk tombol close header
  closeBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    mainHeader.classList.remove('show'); // Mengganti '-translate-y-full' dengan 'show'
    toggleBtn.classList.remove('hide');   // Mengganti 'hidden' dengan 'hide'
  });
}

// Typewriter effect untuk teks di section "Home"
const typewriterElement = document.getElementById("typewriter");
const phrases = ["Hello, I'm RAHMAT", "I Love Coding", "I Create Amazing Websites"];
let phraseIndex = 0;
let letterIndex = 0;
const typingDelay = 100;
const erasingDelay = 50;
const newPhraseDelay = 2000;

function type() {
  // Kosongkan teks pada awal setiap frase baru
  if (letterIndex === 0) {
    typewriterElement.textContent = '';
  }

  if (letterIndex < phrases[phraseIndex].length) {
    typewriterElement.textContent += phrases[phraseIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newPhraseDelay);
  }
}

function erase() {
  if (letterIndex > 0) {
    typewriterElement.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // Pindah ke frase berikutnya setelah selesai menghapus
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingDelay);
  }
}

// Inisialisasi typewriter effect saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  if (typewriterElement) {
    setTimeout(type, newPhraseDelay);
  }
});

// Logika penggantian ikon dalam grup
const iconGroups = document.querySelectorAll('.icon-container');
const currentIndexArray = Array.from({ length: iconGroups.length }, () => 0);

function nextIcon(groupIndex) {
  const iconCards = iconGroups[groupIndex].querySelectorAll('.icon-card');
  if (iconCards.length > 0) {
    // Sembunyikan ikon saat ini
    iconCards[currentIndexArray[groupIndex]].classList.remove('active');
    
    // Perbarui indeks ke ikon berikutnya
    const nextIndex = (currentIndexArray[groupIndex] + 1) % iconCards.length;
    currentIndexArray[groupIndex] = nextIndex;

    // Tampilkan ikon baru
    iconCards[nextIndex].classList.add('active');
  }
}

// Tambahkan pergantian otomatis setiap 3 detik untuk setiap grup (opsional)
iconGroups.forEach((_, index) => {
  setInterval(() => nextIcon(index), 3000);
});

// Setup counter jika diperlukan
const counterBtn = document.querySelector('#counter');
if (counterBtn) setupCounter(counterBtn);
