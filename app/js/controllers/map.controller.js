//нам нужно создать контроллер, если у вас его еще нет
function MapCtrl(mapService, geocoderService, ymapsConfig, $firebaseAuth) {
    var vm = this;



    // geocoder

    vm.latitude = null;
    vm.longitude = null;
    vm.geocodeError = false;
    vm.isFinished = false;
    vm.address = '1600 Pennsylvania Avenue NW, Washington, D.C. 20500';

    geocoderService.getLatLong(vm.address).then(function(latlng){
        vm.latitude = latlng.lat();
        vm.longitude = latlng.lng();
    }, function(){
        vm.geocodeError = true;
    }).finally(function(){
        vm.isFinished = true;
    });


    console.log(vm);

    vm.showAddBool = false;

    vm.showAdd = function () {
        vm.showAddBool = !vm.showAddBool;
    };



    console.log(ymapsConfig);

    vm.teams = mapService.getTeams();

    vm.createTeaams = function () {
        console.log('start');

        var team = {
            name: 'UFO CTF 2016',
            city: 'Taganrog',
            x: '',
            y: '',
            url: 'ufoctf.ru',
            about: 'asd'
        };

        for (var i=0; i < 5; i++){
            mapService.addTeam(team);
        }

    };

    //включим кластеризацию
    ymapsConfig.clusterize = true;



    //создаем массив координат и данных для меток и балунов
    vm.markers = [
        {coordinates: [56.56, 38.63], properties: {balloonContent: '<img src="http://placehold.it/100x100"><br></br><a href="http://vk.com">VK</a>Здесь рыбы нет! <br><a href="http://vk.com">VK</a>Здесь рыбы нет! <br><a href="http://vk.com">VK</a>Здесь рыбы нет! <br>'}},

        {coordinates:[55.16, 39.89], properties: {balloonContent: '<script type= text/javascript>alert("1")</script>Здесь рыбы тоже нет'}, options: {preset: 'islands#icon', iconColor: '#a5260a'}},
        {coordinates:[55.08, 38.96], properties: {balloonContent: 'А здесь есть!'}}

    ];
    //настройки положения карты
    vm.map = {
        center: [55.55, 39.84], zoom: 3
    };
}


angular.module('ctfmap')
.controller('MapCtrl', ['mapService', 'geocoderService', 'ymapsConfig', '$firebaseAuth', MapCtrl]);


