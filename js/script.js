let buttonToShow = document.querySelector(".modal-show")
let section = document.querySelector(".section-main").parentElement
let myModal = document.querySelector(".modal")
let closeModal = document.querySelector(".modal img")

document.body.addEventListener("keyup",function(event){
    if (event.keyCode === 27) {
        myModal.style.display = "none"
        section.classList.remove("blur")
    }
})
buttonToShow.addEventListener("click",function(){
    myModal.style.display = "block"
    section.classList.add("blur")
})
closeModal.addEventListener("click",function(){
    myModal.style.display = "none"
    section.classList.remove("blur")
})
