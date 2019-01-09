const addButton = document.getElementsByClassName('add-button')

function addTodoList() {
    var list = document.createElement('li')
    var text = document.getElementsByClassName('todo-input')[0]
    var input = document.createTextNode(text.value)
    var button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.innerHTML = 'X'

    if(!text.value || text.value == ' ') {
        alert('텍스트를 입력하세요')
        return
    }

    list.appendChild(input)
    list.append(button)

    var todoList = document.getElementsByClassName('todo-list')[0]

    todoList.appendChild(list)
    text.value = " "

    button.addEventListener('click', () => {
        todoList.removeChild(list)
    })
}

addButton[0].addEventListener("click", addTodoList)

const todoList = document.getElementsByClassName('todo-list')[0]

function doneTodoList(event) {
    if(event.target.classList[0] == 'done') {
        event.target.classList.remove('done')
    }
    else if (event.target.tagName === 'LI') {
    event.target.classList.add('done')
    }
}

todoList.addEventListener('click', doneTodoList)