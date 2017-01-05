// Initialize Firebase
var config = {
    apiKey: "AIzaSyDm3Sjn6--PGBFfKsv9Q1RP8G1rtEsYvfg",
    authDomain: "ctfmap-d8d0c.firebaseapp.com",
    databaseURL: "https://ctfmap-d8d0c.firebaseio.com",
    storageBucket: "ctfmap-d8d0c.appspot.com",
    messagingSenderId: "355705145708"
};
firebase.initializeApp(config);

angular.module('ctfmap', [
    'firebase',
    'ymaps',
    'ngAnimate',
    'ngMaterial'

]);

