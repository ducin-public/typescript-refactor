import { Model } from './model';
import { util } from './util';

declare const $;

export class View {

    private todoTemplate;
    private footerTemplate;
    private model:Model;
    private filter;

    constructor(model:Model) {
        this.model=model;
        this.init();
    }

    init()
    {
        'use strict';
        Handlebars.registerHelper('eq', function (a, b, options) {
            return a === b ? options.fn(this) : options.inverse(this);
        });
        this.todoTemplate = Handlebars.compile($('#todo-template').html());
        this.footerTemplate = Handlebars.compile($('#footer-template').html());
    }

    render () {
        var todos = this.model.getFilteredTodos(this.filter);
        $('#todo-list').html(this.todoTemplate(todos));
        $('#main').toggle(todos.length > 0);
        $('#toggle-all').prop('checked', this.model.getActiveTodos().length === 0);
        this.renderFooter();
        $('#new-todo').focus();
        util.store('todos-jquery', this.model.getTodos());
    }

    renderFooter () {
        var todoCount = this.model.getTodos().length;
        var activeTodoCount = this.model.getActiveTodos().length;
        var template = this.footerTemplate({
            activeTodoCount: activeTodoCount,
            activeTodoWord: util.pluralize(activeTodoCount, 'item'),
            completedTodos: todoCount - activeTodoCount,
            filter: this.filter
        });

        $('#footer').toggle(todoCount > 0).html(template);
    }

    setFilter(filter){
        this.filter=filter;
    }

    getFilter()
    {
        return this.filter;
    }

}