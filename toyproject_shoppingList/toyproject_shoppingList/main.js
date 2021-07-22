const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form input');
const btn = document.querySelector('form button');


btn.addEventListener('click', listAdd);

// list input value 받기 
function listAdd() {
    //let 으로 선언해주지 않으면, 어디든지 사용가능한 전역변수로 인지됨
    newList = document.createElement('li');
    newList.style.backgroundColor = "#faff92";
    let newContent = input.value;
    newList.textContent = newContent;
    ul.appendChild(newList);
    input.value = "";

    //drop button
    let dropBtn = document.createElement('span');
    let dropBtnIcon = '❌';
    dropBtn.style.display = 'inline-block';
    dropBtn.style.float = 'right';
    dropBtn.textContent = dropBtnIcon;
    newList.appendChild(dropBtn);
    dropBtn.addEventListener('click' , deleteList);
   //textAlign은 span에 적용이 안됨 inline-block 으로 지정해준 뒤에 적용됨
}

function deleteList() {
    ul;
    ul.removeChild(ul.childNodes[0]);
}