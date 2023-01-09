const protocol = window.location.protocol;
const host = window.location.host;
const createButton = document.querySelector("#createButton");
const newMajanote = document.querySelector("#newMajanote");
const errorMessages = document.querySelector("#errorMessages");
const container=document.querySelector('.container');
const container2=document.querySelector('.container2');
const stickycontainer=document.querySelector('.sticky-container')
const body=document.querySelector('body')
const logo=document.querySelector('#mainLogo')
const loginBtn=document.querySelector('#loginButton')
const loggedIntxt=document.querySelector('#loggedInText')

fetch(`${protocol}//${host}/data`)
	.then(resp => resp.json())
	.then(data => renderNotes(data))


if (errorMessages.textContent.length > 0) {
    newMajanote.style.display = "initial";
} else {
    newMajanote.style.display = "none";
}
    
document.getElementById('logoutButton').addEventListener('click', ()=>{
    window.localStorage.clear()
    user=window.localStorage.clear();
    window.location.href="/"
})


createButton.addEventListener('click', () => {
    stickycontainer.classList.toggle('active');
    container.classList.toggle('active')
    container2.classList.toggle('active')
    body.classList.toggle('active')
    logo.classList.toggle('inactive')
    loginBtn.classList.toggle('inactive')
    loggedIntxt.classList.toggle('active')
    console.log(stickycontainer.classList)
    if(stickycontainer.classList.contains('active')) createButton.innerHTML='x'
    else {
        createButton.innerHTML='+ create'
    }
    

});

