const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todoData';

let todoData = [];

// Todo 리스트 배열에 담아서 로컬 스토리지에 저장
function saveToDos() {
    // 저장 값이 배열이 아니라 스트링값으로 변환
    localStorage.setItem('todoData', JSON.stringify(todoData));
}

// Todo 리스트 삭제
function deleteTodo(event) {
    // 선택한 태그의 부모값을 찾아서 삭제
    const li = event.target.parentElement;
    // console.log("li.id", li.id);

    li.remove();
    todoData = todoData.filter(todo => todo.id !== parseInt(li.id));

    // 필터한 todo 값을 로컬스토리지에 저장
    saveToDos();
}

// 태그를 생성해서 Todo 리스트 추가
function paintTodo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;

    const span = document.createElement('span');
    const button = document.createElement('button');

    button.innerText = '❌';
    button.addEventListener('click', deleteTodo);

    // li 태그에 span & button 태그를 담아서 ul에 각각 추가
    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo.text;

    toDoList.appendChild(li);
}

// todo 리스트 submit 이벤트
function handleTodoSubmit(event) {
    // submit 이벤트를 도중에 막아주는 기능
    event.preventDefault();

    const newTodo = toDoInput.value;

    // 리스트 추가 후 인풋 값 비워 줌
    toDoInput.value = '';

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    // console.log("newTodoObj : ", newTodoObj.text);

    todoData.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleTodoSubmit);

// function sayHello(item) {
//     console.log(`hi : `, item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

console.log('savedToDos : ', savedToDos);

if (savedToDos !== null) {
    // 로컬스토리지에서 받은 값을 배열로 변경
    const parsedToDos = JSON.parse(savedToDos);

    // 로컬 데이터가 있다면 입력 목록에 이전값들을 저장하도록 설정
    todoData = parsedToDos;

    console.log('parsedToDos  : ', parsedToDos);

    // 배열 갯수만큼 함수를 실행!
    // parsedToDos.forEach(sayHello);

    // parsedToDos.forEach((item) => paintTodo(item));
    parsedToDos.forEach(paintTodo);
}

// function testFilter() {}

// testFilter(4);
