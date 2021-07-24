const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form input');
const formBtn = document.querySelector('form button');

let toDos = []; // 리스트 목록이 들어갈 배열 


formBtn.addEventListener('click', listAdd); // 버튼 클릭시 listAdd 이벤트 발생 

// list input value 받기 
function listAdd() { 
    let newContent = input.value; // newContent is input.value
    if(newContent === '') { // if newContent is null, show alert msg window 
        alert('please write your text'); 
        return false; //if newContent submit null state, not submit.
    }
    inputToDo(newContent); //not previously mentioned, inputToDo function execution

//받아온 인풋 값 리스트 처리
function inputToDo(text){ 
    let newList = document.createElement('li');
    let dropBtn = document.createElement('button');
    let span = document.createElement('span');
    let newId = toDos.length + 1;// 새로 생긴 newList들 각각에 고유 아이디 부여해줌 

//삭제버튼 생성 & 이벤트 리스너 
    dropBtn.textContent = '❌'; //dropBtn inner text '❌'
    dropBtn.addEventListener('click' , deleteList); //dropBtn click -> deleteList funtion execution
    newList.appendChild(span); //span is inline tag, button is inline-block tag 한줄에 배치됨 
    newList.appendChild(dropBtn);
    ul.appendChild(newList);
    input.value = '';// input.value is always null 

    span.textContent = text; // 앞서 지정한 parameter 인 text를 어떤 것으로 받을지 지정. span에 text의 내용을 받아올것 
    
    newList.id = newId; // newList 에 새로운 id 부여 
    const shopObj = {
        id:newId,
        text:text,
    };
    toDos.push(shopObj); //toDos array에 shopobject를 삽입 

    //리스트 스타일 속성 
     newList.style.backgroundColor = "#faff92";
    // 삭제버튼 스타일 속성
    dropBtn.style.float = 'right';
}
}

function deleteList(event){
    const btn = event.target; // btn은 event target을 가져옴 -> dropBtn
    const li = btn.parentNode; //dropBtn의 parentNode인 li 가져옴 
    ul.removeChild(li); //ul의 자식요소인 li 가 삭제 됨 

    
}

