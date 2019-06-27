import axios from 'axios'
import { BASE_URL, TODOS_URL } from '../../src/model/configuration'
import { Todo } from '../../src/model/interfaces'

export const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/${TODOS_URL}`)
    return response.data
}

export const createTodo = async (paylaod: Todo) =>
    await axios.post(`${BASE_URL}/${TODOS_URL}`, paylaod)

export const updateTodo = async (paylaod: Todo) =>
    await axios.put(`${BASE_URL}/${TODOS_URL}`, paylaod)

export const deleteItemById = async <T extends { id: string }> (paylaod: T['id']) =>
    await axios.delete(`${BASE_URL}/${TODOS_URL}`, { data : paylaod })
