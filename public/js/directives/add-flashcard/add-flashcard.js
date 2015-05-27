app.directive('addFlashcard', function(Card) {
	return {
		restrict: 'E',
		templateUrl: 'js/directives/add-flashcard/add-flashcard.html',
		// scope: true,
		link: function(scope, element, attrs) {
			console.log('testsdsd', scope);
			scope.flashCard = Card.toEdit.card;
			console.log('testsdsd', scope);
		}
	}
})

