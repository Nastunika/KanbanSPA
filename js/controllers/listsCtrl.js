/**
 * Created by s-ka on 12.07.2017.
 */
angular.module('app').controller('listsCtrl', function (listFactory) {
   console.log('listsCtrl');

   // Name of ListName - in the listFactory

    this.lists = listFactory.getLists();

});
