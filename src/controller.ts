import { Model } from './model';
import { ENTER_KEY, ESCAPE_KEY, util } from './util';
import { View } from './view';

declare const $;

export class Controller {

    private view:View;
    private model:Model;
    LOCAL_STORAGE_MODE:boolean=true;
    REST_API_MODE:boolean=false;

    constructor(model:Model,view:View) {
        this.model=model;
        this.view=view;
    }

    bindEvents() {
        $('#local_checkbox').on('click', this.toggleRestData.bind(this));
        $('#api_checkbox').on('click', this.toggleApiData.bind(this));
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

    toggleApiData (e) {
        console.log(e.target.checked)
        this.REST_API_MODE=e.target.checked;
    }

    toggleRestData (e) {
        console.log(e.target.checked)
        this.LOCAL_STORAGE_MODE=e.target.checked;
    }

    create (e) {
        // http post jeden
        var $input = $(e.target);
        var val = $input.val().trim();

        if (e.which !== ENTER_KEY || !val) {
            return;
        }

        const tempTodos=this.model.getTodos();
        tempTodos.push(util.newTodo(val))
        this.model.setTodos(tempTodos);

        $input.val('');

        this.view.render();
    }

    toggleAll (e) {
        var isChecked = $(e.target).prop('checked');

        this.model.getTodos().forEach(function (todo) {
            todo.completed = isChecked;
        });

        this.view.render();
    }


    destroyCompleted() {
        // many http delete
        this.model.setTodos(this.model.getActiveTodos());
        this.view.setFilter('all');
        this.view.render();
    }

    toggle (e) {
        var i = this.indexFromEl(e.target);
        this.model.getTodos()[i].completed = !this.model.getTodos()[i].completed;
        this.view.render();
    }

    edit(e) {
        var $input = $(e.target).closest('li').addClass('editing').find('.edit');
        $input.val($input.val()).focus();
    }

    editKeyup(e) {
        if (e.which === ENTER_KEY) {
            e.target.blur();
        }

        if (e.which === ESCAPE_KEY) {
            $(e.target).data('abort', true).blur();
        }
    }

    update (e) {
        var el = e.target;
        var $el = $(el);
        var val = $el.val().trim();

        if (!val) {
            this.destroy(e);
            return;
        }

        if ($el.data('abort')) {
            $el.data('abort', false);
        } else {
            this.model.getTodos()[this.indexFromEl(el)].title = val;
        }

        this.view.render();
    }

    destroy (e) {
        this.model.getTodos().splice(this.indexFromEl(e.target), 1);
        this.view.render();
    }


    indexFromEl (el) {
        var id = $(el).closest('li').data('id');
        var todos = this.model.getTodos();
        var i = todos.length;

        while (i--) {
            if (todos[i].id === id) {
                return i;
            }
        }
    }



}
