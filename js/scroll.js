document.addEventListener("DOMContentLoaded", (event) => {
  const cards = document.querySelector(".garant-cards");
  const image = document.querySelector(".garant-title__image");
  
  if (window.innerWidth > 1000) {
    document.addEventListener("scroll", () => {
      const top = cards.getBoundingClientRect().top;
      console.log(image.clientHeight);
      if (top < 0 && top > -1200) {
        image.style.top = 50 + "px";
        image.style.position = "fixed";
        image.style.zIndex = 1000;
      } else {
        image.style.position = "relative";

        if (top > 0) {
          image.style.top = "50px";
        }

        if (top < -1200) {
          image.style.top = "1200px";
        }
      }
    });
  } else {
    image.style.position = 'static'
  }
});
