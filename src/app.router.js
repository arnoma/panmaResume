let mainTemplate = require('pages/home/home.html');
let detailsTemplate = require('pages/details/details.html');

module.exports = ({_am,_ng} = __APP)=>{

    _am.config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

        $locationProvider.html5Mode(true);


        $stateProvider
            .state('home', {
                url: '/home',
                template: mainTemplate,
                controller:'HomePageController'
            })
            .state('details', {
                url: '/details',
                template: detailsTemplate,
                controller:'HomePageController'
            });
        $urlRouterProvider.otherwise('/home');

    });

};
