const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')

const submitButton = document.getElementById('buttonForm')

submitButton.addEventListener('click',()=>{
    document.getElementById("buttonForm").style.transform = "rotate(20deg)";
    document.getElementById("myP").style.visibility = "visible";
    
})