/**
 * Created by s-ka on 12.07.2017.
 */
angular.module('app').factory('cardFactory', function () {
   var service = {};

   var cards = [
       {
           id: 1,
           description: 'Test fix bug',
           list_id: 1
       },
       {
           id: 2,
           description: 'I need to work',
           list_id: 2
       },
       {
           id: 3,
           description: 'Angular the best',
           list_id: 3
       }
   ];



    service.addCard = function (description) {
        cards.push({
            id: _.uniqueId('card_'),
            description: description,
            list_id: 1
        });
    };

    service.getCards = function (list) {
        return _.filter(cards, { list_id : list.id});
    };


    return service;
});