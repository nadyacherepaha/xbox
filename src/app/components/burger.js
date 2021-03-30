(function () {
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.header__nav')
    const menuCloseItem = document.querySelector('.header__nav-close')
    const menuLinks = document.querySelectorAll('.header__link')
    const bodyFixedPos = document.querySelector('body')

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active')
        bodyFixedPos.classList.add('fixed-page')
    })
    menuCloseItem.addEventListener('click', () => {
        bodyFixedPos.classList.remove('fixed-page')
        menu.classList.remove('header__nav_active')
    })
    if (window.innerHeight <= 768) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                bodyFixedPos.classList.remove('fixed-page')
                menu.classList.remove('header__nav_active')
            })
        }
    }
}())
