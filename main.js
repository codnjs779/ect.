// 구현해 낼 것: 커서가 마우스를 따라 움직이고 가로 세로 선이 있는 화면 
const hori = document.querySelector('.hori');
const verti = document.querySelector('.verti');
const cursorItem = document.querySelector('.cursorItem img');
const num = document.querySelector('.num');

// 이전 코드에서 mouseover event를 사용했는데 그렇게 되면 뻑뻑(?)하게 움직이는 느낌이 계속 났다 
//mouseover은 요소에 마우스가 들어갔다 나올 때 마다 이벤트가 실행되는 것이고 mousemove는 마우스를 움직일때 이벤트가 실행되는 것이기 때문에 차이가 났던것!! 
 

document.addEventListener('mousemove', (etn) => {
    const x = etn.clientX;
    const y = etn.clientY;
    num.innerHTML = `${x} , ${y}`;
    num.style.left = `${x}px`;
    num.style.top = `${y}px`;

    verti.style.left = `${x}px`;
    hori.style.top = `${y}px`;

    cursorItem.style.left = `${x}px`;
    cursorItem.style.top = `${y}px`;
    
    
})