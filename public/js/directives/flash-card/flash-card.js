app.directive('flashCard', function($rootScope, Card) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/flash-card/flash-card.html',
		scope: {
			card: '='
		},
		link: function(scope, element, attrs) {

			scope.answerQuestion = function (answer, flashCard) {
				if (!flashCard.answered) {
					flashCard.answered = true;
					flashCard.answeredCorrectly = answer.correct;
					answer.correct ? Score.correct++ : Score.incorrect++
				}
			}

			scope.edit = function (card) {
				console.log('test', card);
				Card.toEdit.card = card;

				if (!$rootScope.addButton) $rootScope.addButton = true
    			else $rootScope.addButton = false
			}
		}
	}
})

