var countDownDate = new Date("Jan 01, 2024 00:00:00").getTime();
const monthsElement = document.getElementById('month');
const daysElement = document.getElementById('day');
const hoursElement = document.getElementById('hour');
const minutesElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');


// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    let today = new Date().getTime();

    // Find the distance between now and the count down date
    let interval = countDownDate - today;

    // Time calculations for days, hours, minutes and seconds
    let days = 30 % Math.floor(interval / (1000 * 60 * 60 * 24));
    let hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((interval % (1000 * 60)) / 1000);
    
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;


    // If the count down is finished, write some text
    if (interval < 0) {
        clearInterval(x);
        document.getElementById("new").innerHTML = "HAPPY NEW YEAR ! TIME FOR A NEW BEGINNING";
    }
}, 1000);

//scroll
  // JavaScript to handle scrolling
//   document.addEventListener('DOMContentLoaded', function () {
//     const button = document.querySelector('#button'); // Change the ID to the actual ID of your button
//     const body = document.body;
    
//     button.addEventListener('click', function () {
//         body.style.overflow = 'scroll'; // Enable scrolling
//         localStorage.setItem('opened' , 'true')
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Cek apakah overflow hidden seharusnya dihilangkan dari local storage
//     const isOverflowHidden = localStorage.getItem('isOverflowHidden') === 'true';

//     // Atur overflow pada body sesuai dengan nilai dari local storage
//     document.body.style.overflow = isOverflowHidden ? 'hidden' : 'visible';

//     // Tambahkan event listener pada tombol untuk menoggle overflow
//     const toggleButton = document.getElementById('button');
//     toggleButton.addEventListener('click', function () {
    //         // Toggle overflow pada body
    //         document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'visible' : 'hidden';
    
    //         // Simpan status overflow pada local storage
    //         const isHidden = document.body.style.overflow === 'hidden';
    //         localStorage.setItem('isOverflowHidden', isHidden.toString());
    //     });
    // });
    
let isPlaying = false
document.addEventListener('DOMContentLoaded', function () {
    // Cek apakah overflow hidden seharusnya dihilangkan dari local storage
    const isOverflowHidden = localStorage.getItem('isOverflowHidden') === 'true';

    // Atur overflow pada body sesuai dengan nilai dari local storage
    document.body.style.overflow = isOverflowHidden ? 'hidden' : 'visible';

    // Tambahkan event listener pada tombol untuk menoggle overflow
    const toggleButton = document.getElementById('btn');
    toggleButton.addEventListener('click', function () {
        // Toggle overflow pada body
        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = 'visible';
        }

        // Simpan status overflow pada local storage
        const isHidden = document.body.style.overflow === 'hidden';
        localStorage.setItem('isOverflowHidden', isHidden.toString());

        audio.classList.remove("hidden")
        audio.classList.add("animate-spin")

        playmusik()
        isPlaying = true
    });
});

// Musik
function playmusik(){
    song.play();
}

const song = document.getElementById('song');
const audio = document.getElementById('audio')

audio.addEventListener("click" , function(){
    audio.classList.toggle('spin-slow')
    if (isPlaying === true){
        song.pause()
    } else {
        song.play()
    }

    isPlaying = !isPlaying;
})





const kirimPesan = document.getElementById('sendPesan')
const popUp = document.getElementById('popup-modal')
const popUp2 = document.getElementById('popup-modal2')
const selesai = document.getElementById('selesai');
const selesai2 = document.getElementById('selesai2');
const nama = document.getElementById('nama')
const pesan = document.getElementById('pesan')

kirimPesan.addEventListener("click" , function(){
    if (nama.value.trim() === '' || pesan.value.trim() === '') {
        // Tampilkan alert jika input masih kosong
        popUp2.classList.remove("hidden")
      } else {
        // Jika input sudah diisi, tampilkan popup atau lakukan tindakan lainnya
        popUp.classList.toggle('hidden');
      }
})

selesai.addEventListener("click" , function(){
    popUp.classList.add("hidden")
    nama.value = ''
    pesan.value = ''
})

selesai2.addEventListener("click" , function(){
    popUp2.classList.add("hidden")
})

