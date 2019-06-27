import axios from 'axios'
import { BASE_URL, TODOS_URL } from '../../src/model/configuration'
import { Todo } from '../../src/model/interfaces'

export const getTodos = () =>
    axios.get(`${BASE_URL}/${TODOS_URL}`)

export const createTodo = (payload: Todo) =>
    axios.post(`${BASE_URL}/${TODOS_URL}`, payload)

export const updateTodo = (payload: Todo) =>
    axios.put(`${BASE_URL}/${TODOS_URL}`, payload)

export const deleteTodo = (payload: Todo['id']) =>
    axios.delete(`${BASE_URL}/${TODOS_URL}/${payload}`)