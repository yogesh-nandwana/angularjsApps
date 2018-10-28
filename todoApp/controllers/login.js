var app = angular.module("todoApp", []);
app.controller("loginController", function ($scope) {
    $scope.login = function () {
        var isValidUser = false;
        if ("todouser" === $scope.userId) {
            if ("todopwd" === $scope.pwd) {
                isValidUser = true;
            } else {
                isValidUser = false;
            }
        } else {
            isValidUser = false;
        }
        return isValidUser;
    };
    $scope.checkLoginBttn = function () {
        if ($scope.userId == null) {
            $scope.userIdErrMsg = "Please enter userId!";
            $scope.loginDisabled = true;
        } else if ($scope.pwd == null) {
            $scope.pwdErrMsg = "Please enter password!";
            $scope.loginDisabled = true;
        } else {
            $scope.loginDisabled = false;
            $scope.userIdErrMsg = null;
            $scope.pwdErrMsg = null;
        }
    };
    //$scope.checkLoginBttn();
});
