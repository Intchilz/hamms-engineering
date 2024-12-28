document.getElementById("navHamburger").addEventListener("click", function () {
    console.log("click");
    document.querySelector(".nav .nav__menu").classList.toggle("show");
  });

  const date = new Date();

  function getCurrentYear(date) {
    return date.getFullYear();
  }
  
  function getLastModified(date) {
    return `${new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
    }).format(date)}`;
  }

// If you want to add some interactivity (optional)
// Example: Scroll to top on button click (you can add more effects as needed)
document.querySelector('.cta-button').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});
