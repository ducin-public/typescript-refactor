import axios from 'axios';
import uuid from 'uuid/v5';

const createTodo = (todo) => axios.post('http://localhost:3000/todos', {
  id: uuid,
  title: todo,
  completed: false
})

export default createTodo