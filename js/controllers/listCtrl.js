/**
 * Created by s-ka on 12.07.2017.
 */
angular.module('app').controller('listCtrl', function (listFactory, cardFactory) {
   this.getCards = function (list) {
       return cardFactory.getCards(list);
   };
});