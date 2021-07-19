const people = document.querySelector('.people i');
let tent = document.querySelector('.tent');

function climber(event){
    const x = event.clientX;
    const y = event.clientY;
    people.style.left= `${x}px`; 
    people.style.top= `${y}px`;
    console.log(x,y);
}
document.addEventListener('mousemove', climber);

//change icon

document.addEventListener('click' , change);

function change(){
    let tentChange = tent;
    people.appendChild(tentChange);
    
}

