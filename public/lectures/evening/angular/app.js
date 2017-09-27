(function () {           //IIFE - Immediately Invoked function
    angular
        .module('BlogApp',[])
        .controller("BlogPostListController",BlogPostListController);
    function BlogPostListController($scope) {
        $scope.hello = 'hello world'
        $scope.title = $scope.title + "balle"
    }
})();