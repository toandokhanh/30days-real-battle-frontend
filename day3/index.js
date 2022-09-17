const btnElement = document.querySelector(".btn");
const containerElement = document.querySelector(".container");
const ovelayElement = document.querySelector(".ovelay");
const iconCloseElement = document.getElementById("icon");
const btnCloseElement = document.getElementById("btn-close");

const active = () => {
    containerElement.classList.add("active");
    ovelayElement.classList.add("onovelay");
}
const removeactive = () => {
    containerElement.classList.remove("active");
    ovelayElement.classList.remove("onovelay");
    iconCloseElement.classList.remove("active");
    btnCloseElement.classList.remove("active");
}
btnElement.addEventListener("click",active);
ovelayElement.addEventListener("click",removeactive)
iconCloseElement.addEventListener("click", removeactive)
btnCloseElement.addEventListener("click", removeactive)
