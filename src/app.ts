/*global jQuery, Handlebars, Router */
import { Controller } from './controller';
import { Model } from './model';
import { util } from './util';
import { View } from './view';

declare const Router:any;
jQuery(function ($) {
	const model= new Model();
	const view= new View(model);
	const controller= new Controller(model,view);
	
	var App = {
		init: function () {
			const todos = util.store('todos-jquery');
			model.setTodos(todos);
			controller.bindEvents();

			new Router({
				'/:filter': function (filter) {
					view.setFilter(filter)
					view.render();
				}.bind(this)
			}).init('/all');
		}
	};

	App.init();
});
