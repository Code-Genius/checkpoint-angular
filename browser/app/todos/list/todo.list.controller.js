// define a `TodoListCtrl` controller that places injected
// `todos` (from a UI-Router state resolve) on the scope.
// It should have a scope method `setCategory` that changes
// `$scope.filterByCompleted` to certain values; a method
// `isActiveCategory` that confirms the current category;
// and a method `addTodo` that saves `$scope.toAdd` to the backend,
// then goes to that new todo's edit state. (If you are confused about
// where `$scope.toAdd` is coming from, check out the `todo.list.html`.)

app.controller('TodoListCtrl', function($scope, todos, Todo, $state){
  $scope.todos = todos;
  $scope.filterByCompleted = ''
  $scope.setCategory = function(category){
    $scope.filterByCompleted = category === 'completed' ?
                               true : (
                               category === 'active' ?
                               false :
                               '' );
  }
  $scope.isActiveCategory = function(category){
    switch(category){
      case 'all':
        return $scope.filterByCompleted === ''
        break;
      case 'completed':
        return $scope.filterByCompleted === true
        break;
      case 'active':
        return $scope.filterByCompleted === false
        break;
      }
      return category == $scope.filterByCompleted;
    }
  $scope.addTodo = function(){
    Todo.add($scope.toAdd).then( todo => {
      console.log('added todo:',todo);
      var url = '/todos/' + todo._id + '/edit'
      console.log(url);
      $state.go( "todos.edit", {id: todo._id} );
    })
    // console.log(url, $state._mockUrl);
  };
  $scope.getAll = function() {
    Todo.getAll().then( todos => {
      console.log(todos);
      $state.go( "todos" );
    })
  }

})
