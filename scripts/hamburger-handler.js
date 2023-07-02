const toggleElements = [document.querySelector('.hamburger'), document.querySelector('.cover'), ...Array.from(document.querySelectorAll('.nav-list-item > a'))]
const hamburger = document.querySelector('.hamburger-container')

const handleShow = () => hamburger.classList.toggle('show-menu')

toggleElements.forEach(el => el.addEventListener('click', handleShow))
