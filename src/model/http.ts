import axios from 'axios'
import { BASE_URL, TODOS_URL } from '../../src/model/configuration'
import { Todo } from '../../src/model/interfaces'

export const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/${TODOS_URL}`)
    return response.data
}

export const createTodo = async (payload: Todo) => {
    try {
        await axios.post(`${BASE_URL}/${TODOS_URL}`, payload)
    } catch (e) {
        console.error(e)
    }
}

export const updateTodo = async (payload: Todo) => {
    try {
        await axios.put(`${BASE_URL}/${TODOS_URL}`, payload)
    } catch (e) {
        console.error(e)
    }
}

export const deleteTodo = async (payload: Todo['id']) => {
    try {
        await axios.delete(`${BASE_URL}/${TODOS_URL}/${payload}`)
    } catch (e) {
        console.error(e)
    }
}