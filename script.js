
const toggleNavbar = document.getElementById('toggle-navbar');
const navbarLinks = document.getElementById('navbar-links');

toggleNavbar.addEventListener('click', () => {
  navbarLinks.classList.toggle('show');
});

// Scroll to section on link click

navbarLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    const sectionId = e.target.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    navbarLinks.classList.remove('show'); // Hide navbar links after click
  }
});

// DROPDOWN BUTTON section 4

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.add('show');
      }
    }
  }
}


// overlay items section

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// inner text javascript when opened


function openNav(title) {
  document.getElementById("title").innerText = title;
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


