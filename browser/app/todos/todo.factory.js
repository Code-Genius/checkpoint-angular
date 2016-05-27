// define a `Todo` factory that uses AJAX calls to
// read and write from the backend Todo models. The methods
// should all return promises for the *data* of the server responses.

app.factory('Todo', function($http, todoCache){

  var todoFactory = {
    getOne: function(todoId){
      return $http.get('/api/todos/' + todoId).then( todo => todo.data);
    },
    getAll: function(){
      return $http.get('/api/todos')
                  .then( todoList => {
                    return todoList.data} )
    },
    destroy: function(todoId){
      return $http.delete('/api/todos/' + todoId)
    },
    add: function(todoValue){
      console.log(todoCache);
      return $http.post('/api/todos',todoValue)
                  .then( todo => {

                    return todo.data} )
    },
    update: function(todoId, todoValue){
      return $http.put('/api/todos/' + todoId, todoValue)
                  .then( todo => todo.data )
    }
  }
  return todoFactory;
})

app.factory('todoCache', function(){
  return [];
})
