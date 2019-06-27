import { getTodos, createTodo, updateTodo, deleteTodo } from '../src/model/http'
import { Todo, Storage } from './model/interfaces';

export class RestApi implements Storage {

    constructor() {
    }

    getAll() {
        return getTodos()
    }

    create(payload: Todo) {
        createTodo(payload)
    }

    update(payload: Todo['title']) {
        updateTodo(payload)
    }

    delete(payload: Todo['id']) {
        deleteTodo(payload)
    }

}