function mapService($firebaseArray) {
    var messagesRef = firebase.database().ref().child("teams");
    var map = {};

    map.getTeams = function () {
        return $firebaseArray(messagesRef);
    };

    map.addTeam = function (team) {
        map.getTeams().$add(team)
    };



    return map;
}



angular.module('ctfmap')
    .factory('mapService', ['$firebaseArray', mapService]);



