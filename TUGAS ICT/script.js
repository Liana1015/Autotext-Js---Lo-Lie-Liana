// Halaman awal //
Swal.fire({
  title: "<strong>Lo Lie Liana & 11</strong>",
  imageUrl: "Liana.PNG",
  imageWidth: 200,
  imageHeight: 250,
  html: `
    <strong><i>Fake sancti quam celerrime putrescent.</i></strong> <br>
    Fake saints will rot the fastest.<br>
    Orang-orang kudus palsu akan membusuk paling cepat.<br>
    ICT memberikan tugas yang luar biasa menarik, saya hampir menangis mengerjakannya.
  `,
  showCloseButton: true,
});


// Fungsi efek ketik //
function typeText() {
  if (index < text.length) {
    textElement.textContent = text.slice(0, index + 1);
    index++;
    setTimeout(typeText, speed);
  }
}

const textElement = document.getElementById('text');
const speedInput = document.getElementById('speed');
const text = "We Love ICT Everyday, Before The New ICT Teacher Came !";
let index = 0;

// Pastikan value speed tidak 0 //
let speed = 1000 / (parseInt(speedInput.value) || 1);

function startTyping() {
  index = 0;
  currentText = '';
  textDisplay.textContent = '';
  typeText(parseInt(speedInput.value));
}

// Saat input kecepatan akan berubah //
speedInput.addEventListener('input', (e) => {
  speed = 1000 / (parseInt(e.target.value) || 1); 
  if (index < text.length) {
    index = 0;
    textElement.textContent = '';
    typeText();
  }
});

// Agar background menjadi foto dan tulisan neon//
document.body.style.backgroundImage = "url('https://picsum.photos/1920/1080')";
document.body.style.backgroundSize = 'cover';
textElement.style.textShadow = '0 0 10px #fff, 0 0 20px #ff0000, 0 0 30px #ff0000';
textElement.style.color = '#fff';
textElement.style.fontSize = '2.5rem';