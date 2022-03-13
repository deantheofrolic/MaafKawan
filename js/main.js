const buttonNo = document.querySelector(".button-no")
const buttonYes = document.querySelector(".button-yes")

buttonNo.addEventListener("mouseover", function() {
    buttonNo.style.top = (Math.random() * 200) + "px"
    buttonNo.style.left = (Math.random() * 200) + "px"
})

buttonNo.addEventListener("click", function() {
    buttonNo.style.top = (Math.random() * 200) + "px"
    buttonNo.style.left = (Math.random() * 200) + "px"
})

buttonYes.addEventListener("click", function() {
    alert("Nah gitu dong, semangat sekolahnya :>")
})