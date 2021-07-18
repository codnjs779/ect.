// 구현해 낼 것: 커서가 마우스를 따라 움직이고 가로 세로 선이 있는 화면 
// 

const cursor = document.querySelector('.cursorItem');
const h3 = document.querySelector('h3');
const html = document.querySelector('html');
const horizontal = document.querySelector('.horizontal');
const align = document.querySelector('.align');

function mouseFunc(event) {
    html.getBoundingClientRect();
    let x= event.clientX;
    let y= event.clientY;
    h3.innerHTML = `${x}, ${y}`;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
    h3.style.transform = `translate(${x}px, ${y}px)`;
    horizontal.style.transform = `translate(${x}px, ${y}px)`;
    align.style.transform = `translate(${x}px, ${y}px)`;
}

window.addEventListener('load' , () => {
    html.addEventListener('mouseover', mouseFunc);
});
//d아직 defer 문제 해결하지 못함!! 내일 해결하고 다시 커밋 


