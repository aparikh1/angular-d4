app.controller('MainController', function ($scope, Card, Score) {
	// $scope.flashCards = whateverName;
  $scope.categories = [
   'MongoDB',
   'Express',
   'Angular',
   'Node'
 ];



  $scope.switchCategory = function(category) {
    $scope.loaderOn = true
    $scope.flashCards = []

    Card.getByCategory(category)
      .then(function(cards) {
        $scope.loaderOn = false
        $scope.flashCards = cards
      })
    }

  $scope.reset = function() {
    $scope.loaderOn = true
    $scope.flashCards = []
    Card.getAll()
      .then(function(cards) {
        Score.correct = 0
        Score.incorrect = 0
        $scope.loaderOn = false
        $scope.flashCards = cards
      })
  }

  $scope.reset()


  // $scope.onMouseEnter = function ($event) {
  //   console.log('hello', $event)
  // }
});





