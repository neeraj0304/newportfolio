document.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("checkbox");
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleCheckbox.checked = false;
      });
    });
  });

  

  
