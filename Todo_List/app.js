const form = document.querySelector('form')
const input = document.querySelector('input')
const ul = document.querySelector('.todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach((todo) => addTodo(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    var value = input.value.trim()

    if (value) {
        addTodo({ text: value, completed: false })
    }

    input.value = ''
    input.focus()
})

function addTodo(todo) {
    const li = document.createElement('li')

    li.setAttribute('class', todo.completed ? 'completed' : '')
    li.innerHTML = `
        <span>${todo.text}</span>
        <i class="fa-solid fa-trash-can"></i>
    `
    li.addEventListener('click', function () {
        this.classList.toggle('completed')
        updateTodos()
    })

    li.querySelector('i').addEventListener('click', (e) =>
        e.target.parentElement.remove(),
        updateTodos()
    )

    ul.appendChild(li)
    updateTodos()
}

function updateTodos() {
    const list = document.querySelectorAll('li')

    const todos = []

    list.forEach((item) => {
        todos.push({
            text: item.querySelector('span').innerHTML,
            completed: item.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}