// header
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 100);
});




// navbar 
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// let sections = document.querySelectorAll('section');
// let navLink = document.querySelectorAll('header nav ul li a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scroollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top > offset && top < offset + height){
//       navLink.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav ul li a [href*='+id+']').classList.add('active');
//       })
//     }
//   })
// }




let percentages = document.querySelectorAll(".number-pro");

percentages.forEach((element, index) => {
  // Ambil nilai persentase dari teks dalam elemen
  let percentageValue = parseFloat(element.textContent);

  // Setel properti CSS custom property --percentage
  element.style.setProperty("--percentage", percentageValue);
});




function validateForm() {
  // Reset pesan error
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("messageError").innerText = "";

  // Validasi nama
  var name = document.getElementById("name").value;
  if (name === "") {
    document.getElementById("nameError").innerText = "Name is required";
    return false;
  }

  // Validasi email
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email";
    return false;
  }

  // Validasi nomor telepon (opsional)
  var phoneNumber = document.getElementById("phoneNumber").value;
  if (phoneNumber !== "" && isNaN(phoneNumber)) {
    document.getElementById("phoneError").innerText = "Invalid phone number";
    return false;
  }

  // Validasi pesan
  var message = document.getElementById("message").value;
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required";
    return false;
  }

  // Form valid
  return true;
}


const left = document.querySelector('.left');
const right = document.querySelector('.right');
const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;
let index = 0;
let sumOfRight = 0;
let sumOfLeft = 0;


window.addEventListener('resize', () => {
   carouselWidth = document.querySelector('.carousel-container').offsetWidth;
});

right.addEventListener('click', function () {
    index++;
    left.classList.add('show');
    sumOfRight = sumOfRight + carouselWidth;

    if ((sumOfRight + carouselWidth) < track.offsetWidth) {
        track.style.transform = track.style.transform + `translate(-${carouselWidth}px)`;
    } else {
        track.style.transform = `translate(-${track.offsetWidth - carouselWidth}px)`;
    }

    if (track.offsetWidth - (index * carouselWidth) < carouselWidth) {
        right.classList.add('hide');
    }
});

left.addEventListener('click', function () {
    sumOfLeft = sumOfRight - carouselWidth;

    if (sumOfLeft >= carouselWidth) {
        track.style.transform = track.style.transform + `translate(${carouselWidth}px)`;

    } else {
        track.style.transform = `translate(-${0}px)`;
    }

    index--;
    right.classList.remove('hide');
    sumOfRight -= carouselWidth;
    if (index === 0) {
        left.classList.remove('show');
    }
});




