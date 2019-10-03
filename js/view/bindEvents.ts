/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

const bindEvents = function () {
  $('#new-todo').on('keyup', this.create.bind(this));
  $('#toggle-all').on('change', this.toggleAll.bind(this));
  $('#footer').on('click', '#clear-completed', this.destroyCompleted.bind(this));
  $('#todo-list')
    .on('change', '.toggle', this.toggle.bind(this))
    .on('dblclick', 'label', this.edit.bind(this))
    .on('keyup', '.edit', this.editKeyup.bind(this))
    .on('focusout', '.edit', this.update.bind(this))
    .on('click', '.destroy', this.destroy.bind(this));
}

export default bindEvents;