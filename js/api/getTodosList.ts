import axios from 'axios';
import util from '../util/util';

const getTodosList = () => axios.get('http://localhost:3000/todos')
  .then((response) => util.store('todos-jquery', response.data))
  .catch(() => console.error)

export default getTodosList