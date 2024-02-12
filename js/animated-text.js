document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.services-card');
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (elementTop < screenHeight) {
                const textElements = element.getElementsByTagName('p')
                const numberElement = element.getElementsByClassName('services-card__number')
                for (let p of textElements) {
                    p.classList.add('animate-delay')
                }

                for (let p of numberElement) {
                    p.classList.add('animate-normal')
                }
            }
        });
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});


document.addEventListener('DOMContentLoaded', function () {

    let cards = document.querySelector('.garant-cards');
    let garantSection = document.querySelector('.garant')
  
    window.addEventListener('scroll', function () {
      let scrollPosition = window.scrollY;
      let topGarant = garantSection.getBoundingClientRect().top;
    //   console.log(scrollPosition, topGarant);

    //   if (topGarant < 100) {
    //     // document.body.style.overflowY = 'hidden'
    //     cards.style.position = 'fixed';
    //     cards.style.top = 20 + 'px'
    //   } else {
    //     cards.style.position = 'static'
    //   }
    });
  });