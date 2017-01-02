//нам нужно создать контроллер, если у вас его еще нет
function MapCtrl(ymapsConfig) {
    var vm = this;

    //включим кластеризацию
    ymapsConfig.clusterize = true;

    //создаем массив координат и данных для меток и балунов
    vm.markers = [
        {coordinates:[56.56, 38.63], properties: {balloonContent: '<img src="http://placehold.it/100x100"><br></br><a href="http://vk.com">VK</a>Здесь рыбы нет! <br><a href="http://vk.com">VK</a>Здесь рыбы нет! <br><a href="http://vk.com">VK</a>Здесь рыбы нет! <br>'}},
        {coordinates:[55.16, 39.89], properties: {balloonContent: '<script type= text/javascript>alert("1")</script>Здесь рыбы тоже нет'}, options: {preset: 'islands#icon', iconColor: '#a5260a'}},
        {coordinates:[55.08, 38.96], properties: {balloonContent: 'А здесь есть!'}},

    ];
    //настройки положения карты
    vm.map = {
        center: [55.55, 39.84], zoom: 12
    };
}


angular.module('ctfmap')
.controller('MapCtrl', ['ymapsConfig', MapCtrl]);


