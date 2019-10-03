import util from '../util/util'
const render = () => {
  var todos = this.getFilteredTodos();
  $('#todo-list').html(this.todoTemplate(todos));
  $('#main').toggle(todos.length > 0);
  $('#toggle-all').prop('checked', this.getActiveTodos().length === 0);
  this.renderFooter();
  $('#new-todo').focus();
  util.store('todos-jquery', this.todos);
}

export default render;