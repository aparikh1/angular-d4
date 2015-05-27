app.directive('borderOnHover', function() {
	return {
		restrict: 'A',
		// templateUrl: 'js/directives/border-on-hover/border-on-hover.html',
		// scope: true,
		link: function(scope, element, attrs) {
			element.on('mouseenter', function () {
				element.css('border-color', 'red')
			})
			element.on('mouseleave', function () {
				element.css('border-color', 'blue')
			})
		}
	}
})

