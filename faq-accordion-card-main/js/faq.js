const jsContent = document.querySelectorAll('.js-content h3')

  function active(){
    this.classList.toggle('icon')
    this.nextElementSibling.classList.toggle('active')
}
jsContent.forEach((e)=>{
  e.addEventListener('click', active)
})
