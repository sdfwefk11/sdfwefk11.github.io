const loginInput = document.querySelector("#login input");
const loginForm = document.querySelector("#login");
const greeting = document.querySelector("#greeting");



const ID = "username";
const CSS_CLASSNAME_HIDDEN = "hidden";

function formSubmit(event){
    event.preventDefault();
    loginForm.classList.add(CSS_CLASSNAME_HIDDEN);
    const userName = loginInput.value;
    localStorage.setItem(ID, userName);
    paintGreetings(userName);
}

function paintGreetings(username2){
    greeting.innerText = `Hello ${username2}`;
    greeting.classList.remove(CSS_CLASSNAME_HIDDEN);

}

const webUserId = localStorage.getItem(ID);

if (webUserId === null){
    loginForm.classList.remove(CSS_CLASSNAME_HIDDEN);
    loginForm.addEventListener("submit", formSubmit);
} else {
    paintGreetings(webUserId);
}