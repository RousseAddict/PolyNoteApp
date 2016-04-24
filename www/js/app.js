// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})



.controller('AppCtrl',function($scope, $ionicPopup) {
  $scope.msg = 'App Ctrl';
  console.log($scope.msg);
  //home
  $scope.matiere = ['ABD','AEA','BI','CAR','Compil','FAA','HECI','IHM','LABD'];
  $scope.cours = ['Cours 1','Cours 2', 'Cours 3', 'Cours 4', 'Cours 5'];

  //editeur
  $scope.model;

  //questions
  $scope.questions = [{title: "Quel est le sens de la vie ?",
                       vote: 0,
                       show: false,
                       reponses: ["la réponse 1", "la réponse 2"] },
                      {title: "Quelle est la différence entre un pigeon ?",
                       vote: 0,
                       show: false}, 
                      {title: "Combien faut-il de nain pour creuser en 2 jours un tunnel de 28m dans du granit ?",
                       vote: 0,
                       show: false}
                    ];
  $scope.addAnswer = function(i){
    $ionicPopup.prompt({
            title: 'Réponse ?',
            inputType: 'text'    
        })
        .then(function(result) {
          var j = $scope.questions.indexOf(i);
          console.log(j);
          $scope.questions[j].reponses.push(result);
        });
  }
})


.controller('SlidesCtrl', function($scope) {
  $scope.msg = 'SlidesCtrl';
  console.log($scope.msg);

  $scope.enCours = function(){
    return "http://thomaspietrzak.com/download.php?f=commandselection.pdf";
  }
  $scope.allSlides = [];
})


//routes
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state("home",{
    url:"/home",
    templateUrl:"views/home.html",
  })

  $stateProvider.state("editeur",{
    url:"/editeur",
    templateUrl:"views/editeur.html"
  })

  $stateProvider.state("slides",{
    url:"/slides",
    templateUrl:"views/slides.html",
    controller:"SlidesCtrl"
  })

  $stateProvider.state("questions",{
    url:"/questions",
    templateUrl:"views/questions.html"
  })

  $urlRouterProvider.otherwise('/home')

});