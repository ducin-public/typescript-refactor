import axios from 'axios';

const deleteTodo = (id) => axios.delete(`http://localhost:3000/todos/${id}`)

export default deleteTodo