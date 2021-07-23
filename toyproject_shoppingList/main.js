const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form input');
const btn = document.querySelector('form button');

let toDos = [];


btn.addEventListener('click', listAdd);

// list input value 받기 
function listAdd() {
    let newContent = input.value;
    if(newContent === '') {
        alert('please write your text');
        return false;
    }
    inputToDo(newContent);


//받아온 인풋 값 리스트 처리
function inputToDo(text){
    let newList = document.createElement('li');
    let dropBtn = document.createElement('button');
    let span = document.createElement('span');
    let newId = toDos.length + 1;

//삭제버튼 생성 & 이벤트 리스너 
    dropBtn.textContent = '❌';
    dropBtn.addEventListener('click' , deleteList);
    span.textContent = text;
    newList.appendChild(dropBtn);
    newList.appendChild(span);
    ul.appendChild(newList);

    input.value = '';

    newList.id = newId;
    const shopObj = {
        id:newId,
        text:text,
    };
    toDos.push(shopObj);

    //리스트 스타일 속성 
     newList.style.backgroundColor = "#faff92";
    // 삭제버튼 스타일 속성
    dropBtn.style.float = 'right';
}
}

function deleteList(event){
    const btn = event.target;
    const li = btn.parentNode;
    ul.removeChild(li);

    
}

