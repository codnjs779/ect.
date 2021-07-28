const items = document.querySelector('.items');
const itemsRow = document.querySelector('.items__row');
const itemName = document.querySelector('.item__name');
const itemDelBtn = document.querySelector('.item__delete');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');

function onAdd() {
    //1. 사용자가 입력한 인풋값 받아옴
        const inputAdd = input.value;
        console.log(inputAdd);
    //2. 새로운 아이템 만듦(텍스트 + 삭제 버튼)
        const item = createItem();
    //3.  items컨테이너안에 새로 만든 아이템을 추가함
        items.appendChild(item);
    //4. 인풋을 초기화 한다.
        input.value ='';
}

function createItem() {

}


addBtn.addEventListener('click', () => {
    onAdd();
});
