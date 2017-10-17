(function () {           //IIFE - Immediately Invoked function
    angular
        .module('BlogApp',[])
        .controller("BlogPostListController",BlogPostListController);
    function BlogPostListController($scope) {
        $scope.hello = 'Hello World!!!';
        $scope.posts = [];
        $scope.addPost = function (post) {

            var newPost = {
                title: post.title,
                body: post.body,
                date: new Date()
            };
            $scope.posts.push(newPost);

            console.log($scope.posts);
        }
    }
})();