app.controller('AddController', function ($scope, Card) {
	$scope.flashCard;
	$scope.save = function(){

		var answers = [
		{
			text: $scope.flashCard.correct_answer,
			correct: true
		},
		{
			text: $scope.flashCard.incorrect_answer_one,
			correct: false
		},
		{
			text: $scope.flashCard.incorrect_answer_two,
			correct: false
		}];

		var object = {
			question: $scope.flashCard.question,
			category: $scope.flashCard.category,
			answers: answers
		}

		console.log('test', Card);

		Card.addFlashCard(object);	
	}

	// $scope.updateButton = true;



	$scope.reset = function(){

		console.log($scope);

		var object = {
			question: "",
			category: "",
			answers: []
		}

		$scope.flashCard = angular.copy(object);
		$scope.flashcardForm.$setPristine();
	}



})