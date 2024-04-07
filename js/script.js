// loader 
window.onload = function () {
  const loader = document.querySelector(".loader-container");
  loader.style.display = "none";
};


$(function () {

  var filterList = {

    init: function () {

      $('#gallery').mixItUp({
        selectors: {
          target: '.gallery-item',
          filter: '.filter'
        },
        load: {
          filter: '.thumbnail, .logo'
        }
      });

    }

  };

  filterList.init();

});


// review section

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".card-slider-main");
  const leftButton = document.querySelector(".arrow-left");
  const rightButton = document.querySelector(".arrow-right");

  function updateButtonState() {
    leftButton.disabled = container.scrollLeft <= 0;
    rightButton.disabled =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;
  }

  leftButton.addEventListener("click", function () {
    container.scrollBy({
      left: -container.offsetWidth / 2,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    container.scrollBy({ left: container.offsetWidth / 2, behavior: "smooth" });
  });
  container.addEventListener("scroll", updateButtonState);
  updateButtonState();
});


// navbar 

document.querySelector('.toggle-button').addEventListener('click', function () {
  var navUl = document.querySelector('.nav_main_section nav ul');
  navUl.classList.toggle('show');

  var icon = document.querySelector('.toggle-button .icon');
  if (navUl.classList.contains('show')) {
    icon.innerHTML = '&#10005;'; // Cross icon
    icon.style.color = 'tomato'; // Set icon color to white
  } else {
    icon.innerHTML = '&#9776;'; // Hamburger menu icon
    icon.style.color = 'tomato'; // Set icon color to white
  }
});



// open pdf file 
document.getElementById('openPdfButton').addEventListener('click', function () {
  window.open('./pdf/Portfolio.pdf', '_blank');
});

