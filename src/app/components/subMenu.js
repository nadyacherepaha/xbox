const isMenuItem = document.querySelectorAll('.header-top__item')

for(let i = 0; i < isMenuItem.length; i++) {
   isMenuItem[i].addEventListener("mouseenter", showSub, false)
   isMenuItem[i].addEventListener("mouseleave", hideSub, false)
}

function showSub(e) {
   if (this.children.length > 1) {
      this.children[1].classList.add('visible')
   } else {
      return false;
   }
}

function hideSub(e) {
    if (this.children.length > 1) {
      this.children[1].classList.remove('visible')
    } else {
       return false;
    }
}
