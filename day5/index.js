const searchElement = document.querySelector('.search');
const btnElement = document.querySelector('div.search__icon');



btnElement.addEventListener('click',() => {
    searchElement.classList.toggle('active');
})

// btnElement.addEventListener('click',() => {
//     searchElement.style.width = '60px';
// })