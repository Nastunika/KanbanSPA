/**
 * Created by s-ka on 12.07.2017.
 */
angular.module('app').factory('listFactory', function () {
    var service = {};

    var lists = [
        {
            id: 1,
            listName: 'DO IT'
        },
        {
            id: 2,
            listName: 'IN PROGRESS'
        },
        {
            id: 3,
            listName: 'DONE'
        },
        {
            id: 4,
            listName: 'ABORTED'
        }
    ];
    service.getLists = function () {
        return lists;
    };
    return service;
});

