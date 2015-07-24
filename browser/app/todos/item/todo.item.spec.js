'use strict';

var expect = chai.expect;

describe('Todo item', function () {

	beforeEach(module('angularAssessment'));

	describe('directive', function () {

		var ddo;
		before(function () {
			ddo = todoItemDirective();
		});

		it('is an element directive', function () {
			expect(ddo.restrict).to.equal('E');
		});

		it('has isolate scope', function () {
			expect(ddo.scope).to.be.truthy;
		});

		it('accepts a model parameter "theTodo"', function () {
			expect(ddo.scope).to.be.an('object');
			expect(ddo.scope.theTodo).to.equal('=');
		});

	});

	describe('controller', function () {

		var TodoItemCtrl, $scope, Todo, $state;
		beforeEach(inject(function ($controller, $rootScope, _$state_) {
			$scope = $rootScope.$new();
			Todo = {destroy: chai.spy(function () {
				return {
					then: function (f) {
						f();
					}
				}
			})};
			$state = _$state_;
			$state.go = function () {
				$state._mockUrl = $state.href.apply($state, arguments);
			};
			TodoItemCtrl = $controller('TodoItemCtrl', {$scope: $scope, Todo: Todo, $state: $state});
		}));

		describe('.toggleComplete method', function () {

			it('toggles the todo\'s .complete field', function () {
				$scope.theTodo = {complete: false};
				$scope.toggleComplete();
				expect($scope.theTodo.complete).to.equal(true);
				$scope.toggleComplete();
				expect($scope.theTodo.complete).to.equal(false);
			});

		});

		describe('.removeTodo method', function () {

			it('uses Todo factory', function () {
				$scope.theTodo = {_id: 'abc123'};
				$scope.removeTodo();
				expect(Todo.destroy).to.have.been.called.once;
			});

			it('after removal, goes to the todo list state', function () {
				$scope.theTodo = {_id: 'abc123'};
				$scope.removeTodo();
				expect($state._mockUrl).to.equal('/todos');
			});

		});

	});

});