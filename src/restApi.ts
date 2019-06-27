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

    update(payload: Todo) {
        updateTodo(payload)
    }

    delete(payload: Todo['id']) {
        deleteTodo(payload)
    }

    toggle(paylaod) {

    }

    toggleAll(payload: Todo) {

    }

    destroy(payload: Todo) {

    }

    destroyCompleted() {

    }
}