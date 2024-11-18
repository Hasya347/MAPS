// select the todoinput
const taskInput = document.getElementById('todoinput')
// Select the add button
const addBtn = document.getElementById('addbtn')
// select the todolist
const todoList = document.getElementById('todolist')

function addNewTask(taskName) {
    // create a new li element/tag
    const newListItem = document.createElement('li')

    // create new text node contaning the task name
    const span = document.createElement('span')
    const taskTextNode = document.createTextNode(taskName)
    span.appendChild(taskTextNode)

    // create a new button with text "Delete"
    const deleteBtn = document.createElement('button')
    const buttonText = document.createTextNode('Delete')
    deleteBtn.appendChild(buttonText)

    // Add eventlistner to the delete button to delete the li element from the todolist
    deleteBtn.addEventListener('click', function () {
        if (confirm('Are you sure you want to delete this task?')) {
            todoList.removeChild(newListItem)
        }
    })


    // create a new button with text "Done"
    const doneBtn = document.createElement('button')
    const doneText = document.createTextNode('Done')
    doneBtn.appendChild(doneText)

    doneBtn.addEventListener('click', function () {
        span.classList.toggle('doneTask')
    })



    // Append all the newly created elements to new li element
    newListItem.appendChild(span)
    newListItem.appendChild(deleteBtn)
    newListItem.appendChild(doneBtn)

    // finally append the newly created li element to the todolist
    todoList.appendChild(newListItem)
}

addBtn.addEventListener('click', function () {
    if (taskInput.value.trim() !== '') {
        addNewTask(taskInput.value.trim())
        taskInput.value = ''
    } else {
        alert('Task cannot be empty!')
    }
})
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && taskInput.value.trim() !== '') {
        addNewTask(taskInput.value.trim())
        taskInput.value = ''
    }
})
