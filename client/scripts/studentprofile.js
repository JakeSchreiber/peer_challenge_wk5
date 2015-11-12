myApp.directive('studentProfile',
    function(){
        return{
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "assets/views/studentprofile.html"
        }
    });