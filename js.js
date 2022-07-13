const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

const saveTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };
  
  const getTheme = () => {
    return localStorage.getItem("theme") ?? "light";
  };
  
  const toggleTheme = (isDarkTheme) => {
    const checkbox = document.querySelector(
      '.toggle-theme input[type="checkbox"]'
    );
  
    if (isDarkTheme ?? !checkbox.checked ?? false) {
      document.body.classList.add("dark");
      saveTheme("dark");
    } else {
      document.body.classList.remove("dark");
      saveTheme("light");
    }
    checkbox.checked = !checkbox.checked;
  };
  
  window.onload = () => {
    if (getTheme() === "dark") {
      toggleTheme(true);
    }
  
    const themeSwitch = document.querySelector(".toggle-theme");
    themeSwitch.onclick = () => toggleTheme();
  };


/** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA**/
$(document).on('click', function (e){
    /* bootstrap collapse js adds "in" class to your collapsible element*/
    var menu_opened = $('#main-navigation').hasClass('in');
  
    if(!$(e.target).closest('#main-navigation').length &&
        !$(e.target).is('#main-navigation') &&
        menu_opened === true){
            $('#main-navigation').collapse('toggle');
    }

});