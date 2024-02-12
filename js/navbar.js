document.addEventListener('DOMContentLoaded', function () {
    var body = document.body
    var button = document.querySelector('.vbp-header-menu-button__svg')
    var line = document.getElementsByTagName('line');
    var menu = document.querySelector('.mobile-menu')

    button.onclick = function () {
      body.classList.toggle("menu-open")
      if (!menu.style.display || menu.style.display == 'none') {
        menu.style.display = 'flex'
        body.style.overflow = 'hidden'

      } else {
        menu.style.display = 'none'
        body.style.overflow = 'auto'
      }
    }
  });

  const form = document.forms[0]
  form.onsubmit = (event) => {
    event.preventDefault()
    const closeBtn = document.querySelector('.btn-close')
    closeBtn.click()
  }