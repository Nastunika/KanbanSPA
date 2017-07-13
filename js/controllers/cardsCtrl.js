/**
 * Created by s-ka on 13.07.2017.
 */
angular.module('app').controller('cardsCtrl', function (cardFactory) {

    this.priorityNames = [
        {priority: 'low'},
        {priority: 'normal'},
        {priority: 'hight'}
    ];


    this.addCard = function () {
        cardFactory.addCard(this.description);
        // this.description = '';
    };
});