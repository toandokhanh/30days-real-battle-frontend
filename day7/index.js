const AddElement = document.querySelector('button:first-child');
const removeFirstChildElement = document.querySelector('button:nth-child(2)');
const removeAllElement = document.querySelector('button:nth-child(3)');
const inputElement = document.querySelector('#input');
const ulElement = document.querySelector('.ul');


const tags = ['ReactJs', 'NextJs', 'VueJs', 'AngularJs'];

function creact(){
    inputElement.focus();
    ulElement.innerHTML = '';
    tags.forEach((tag, index) => {
        ulElement.innerHTML += `<li>${tag} <span class="close"><i onclick="remove(${index})" class="fa-solid fa-xmark"></i></span> </li>`
    });

};
creact();
function remove(index){
    tags.splice(index, 1);
    creact();
}

AddElement.addEventListener('click', function(){
    if(inputElement.value == ''){
    }
    else {tags.push(inputElement.value.trim());
    inputElement.value ='';
    inputElement.focus();
    creact()
    }
    creact()
}) 
removeAllElement.onclick = function(){
    tags.splice(0,tags.length);
    creact();
}


removeFirstChildElement.onclick = function(){
    const firstChild =tags.length; 
    const firstChildmin =tags.length -1; 
    tags.splice(firstChildmin, firstChild);
    creact();
}
