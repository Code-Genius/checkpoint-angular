// define a `TodoItemCtrl` controller.
// It should have a scope method `toggleComplete` that switches
// the `complete` property of `$scope.theTodo`, and a
// `removeTodo` scope method that deletes the current todo
// from the backend and then goes back to the `todos` state.

app.controller('TodoItemCtrl', function($scope, Todo, $state){
  $scope.toggleComplete = function(){

    var complete = $scope.theTodo.complete;
    $scope.theTodo.complete = !!complete ? false : true;
  }

  $scope.removeTodo = function(){
    Todo.destroy($scope.theTodo._id).then( function() { $state.go('todos');})
  }
})
