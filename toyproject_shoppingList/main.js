const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form input');
const btn = document.querySelector('form button');

btn.addEventListener('click', listAdd);

function listAdd() {
    let newList = document.createElement('li');
    newList.style.backgroundColor = "#faff92";
    let newContent = input.value;
    newList.textContent = newContent;
    ul.appendChild(newList);
    console.log(newList);

}

