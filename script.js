const FAQiconsEL = document.querySelectorAll(".FAQicons");

FAQiconsEL.forEach((icons) => {
  icons.addEventListener("click", () => {
    icons.parentNode.classList.toggle("active");
  });
});
