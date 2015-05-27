angular.module('flashCards')
  .factory('Card', function($http) {
    var toEdit = {}
    return {
      toEdit: toEdit,
      getAll: function(options) {
        options = options || {}
        return $http
          .get('/cards', options)
          .then(function(response) {
            return response.data
          })
      },

      getByCategory: function(category) {
        return this.getAll({ 
          params: {
            category: category 
          }
        })
      },

      addFlashCard: function(object){
        console.log(object)
        return $http
          .post('/cards', object)
          .then(function(response){
            $scope.$digest;
          })
      },

      updateFlashCard: function (card) {
        return $http
          .post('/cards/' + card._id, card)
          .then(function(){
            $scope.$digest;
          })
      }
    }
  })