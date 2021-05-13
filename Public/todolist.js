$(() => {
    let newtodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(() => {
        let newTodo = newtodoBox.val()
        
        $.post(
            '/todos/' , 
            {task : newTodo} , 
            (data) => {
                todoList.empty()

                for(todo of data) {
                    todoList.append("<li>" + todo.task + "</li>")
                }
            }
        )
    })
})
