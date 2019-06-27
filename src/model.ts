export class Model {
    private todos=[];

    constructor() {
    }

    setTodos(todos)
    {
        this.todos=todos;

    }

    getTodos()
    {
        return this.todos;
    }


    getActiveTodos () {
        return this.todos.filter(function (todo) {
            return !todo.completed;
        });
    }

    getCompletedTodos() {
        return this.todos.filter(function (todo) {
            return todo.completed;
        });
    }

    getFilteredTodos (filter) {
        if (filter === 'active') {
            return this.getActiveTodos();
        }

        if (filter === 'completed') {
            return this.getCompletedTodos();
        }

        return this.getTodos();
    }

}