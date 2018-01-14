
// first we have to declare the module. note that [] is where we will declare the dependecies later. Right now we are leaving it blank
var myApp = angular.module('blogApp', []); 

myApp.controller('blogController', function($scope) {

  $scope.blogs = 
                  [
                    {
                          "title": "Blog Post One",
                          "body": [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                            "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                            "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                            "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
                          ],
                          "author": "Aditya Kumar",                       
                          
                          "createdOn":1408547127216
                    },
                    {
                          "title": "Blog Post Two",
                          "body": [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem deleniti quae, neque libero voluptate maiores ullam unde voluptatem assumenda velit dolores impedit quis qui! Neque, cupiditate labore nulla? Atque, tenetur.",
                            "Numquam nobis nam voluptas blanditiis eveniet in quasi possimus voluptatem temporibus doloremque delectus dolorum, voluptatum laborum aut dolorem? In rerum necessitatibus soluta incidunt nihil numquam fugit quas pariatur dolores nesciunt?",
                            "Quibusdam placeat quisquam iure repellendus ad in, nihil numquam quaerat, facere alias illo. Tempora perferendis incidunt, ratione eveniet esse earum, corporis sit? Modi enim commodi odio placeat minus, error id?",
                            "Corrupti voluptates asperiores ratione laudantium, eveniet molestiae possimus deleniti officia, incidunt quae et. Amet, ducimus eum ipsa reprehenderit ad, et nihil, veritatis ea doloremque ab placeat dolore impedit, quia eius."
                          ],
                          "author": "Aditya Kumar",                         
                          "createdOn":1408547127216
                    }

                ];


  $scope.pageHeading = 'edWisor Blog';
  $scope.pageSubHeading = 'A collection of experience by students, alumni and edWisor.com team';


  $scope.viewblog = function(index){
        $scope.myvar = true;
        $scope.hideeditbutton = true;
        $scope.title = $scope.blogs[index].title;
        $scope.edited = true;
        $scope.subTitle = "AuthorName :- " + $scope.blogs[index].author;
        
        $scope.authorname = $scope.blogs[index].author;
        $scope.body = $scope.blogs[index].body;
}

$scope.editblog = function(index){
      $scope.editme = true;
      $scope.myvar = true
      $scope.edited = false;
      
      $scope.title = $scope.blogs[index].title;
      $scope.body = $scope.blogs[index].body;
      $scope.authorname = $scope.blogs[index].author; 
      $scope.blogs[index].title = $scope.title;
      $scope.blogs[index].body = $scope.body;
      $scope.blogs[index].author = $scope.authorname;

      $scope.title = "";
      $scope.body = "";
      $scope.authorname = ""; 
}
$scope.addnewpost = function(){
    $scope.addnew = true;
    var myblog = {
                          "title": $scope.addtitle,
                          "body": [
                                   $scope.addbody
                            ],                          
                          "author": $scope.addauthorname,                       
                          
                          "createdOn":Date.now()
                    }
    $scope.blogs.push(myblog);
    
    $scope.addtitle = "";
    $scope.addbody = "";
    $scope.addauthorname  ="";                

}

$scope.deleteblog = function(index){
  $scope.blogs.splice(index,1);


}




   


}); // end controller