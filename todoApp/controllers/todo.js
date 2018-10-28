var app = angular.module("todoApp", []);
app.controller("todoController", function ($scope) {
    $scope.todos = [];

    $scope.enableAddButton = function () {
        $scope.disabled = $scope.todoText == null ? true : false
        if ($scope.disabled == false) {
            $scope.errorMsg = null;
        }
    };

    $scope.updateStatus = function (todo) {
        var index = $scope.todos.indexOf(todo);
        if (index > -1) {
            var markedTodo = $scope.todos[index];
            markedTodo.isCompleted = true;
            markedTodo.cDate = new Date();
        } else {
            $scope.errorMsg = "Status update failed!";
        }
    };

    $scope.add = function () {
        var newTodo = {
            "serial": $scope.todos.length + 1,
            "text": $scope.todoText,
            "isCompleted": false,
            "cDate": ""
        };
        var existingTodoTexts = $scope.todos.map((addedTodos) => addedTodos.text);
        if (!existingTodoTexts.includes($scope.todoText)) {
            $scope.todos.push(newTodo);
        } else {
            $scope.errorMsg = "Todo already exists!";
        }
        $scope.todoText = null;
        $scope.enableAddButton();
    };
    $scope.delete = function (todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };
});
