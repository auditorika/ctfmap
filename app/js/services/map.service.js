function mapService($firebaseArray) {
    var messagesRef = firebase.database().ref().child("teams");
    var map = {};

    map.getTeams = function () {
        return $firebaseArray(messagesRef);
    };

    map.shownTeams = function () {
        return $firebaseArray(messagesRef.limitToLast(15));
    };


    map.addTeam = function (team) {
        map.getTeams().$add(team)
    };

    var team = {

        

    };


    return map;
}



angular.module('ctfmap')
    .factory('mapService', ['$firebaseArray', mapService]);



