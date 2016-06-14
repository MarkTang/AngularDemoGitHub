'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute']) //'ngSanitize', 'ngCookies'
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/newEvent", {
                templateUrl: "templates/NewEvent.html",
                controller: "EditEventController"
            })
            .when("/events", {
                templateUrl: "templates/EventList.html",
                controller: "EventListController"
            })
            .when("/event/:eventId", {
                templateUrl: "templates/EventDetails.html",
                controller: "EventController"
            })
            .otherwise({ redirectTo: "/events" });

        $locationProvider.html5Mode(true);

    })
    .factory('myCache', function($cacheFactory) {
        return $cacheFactory("myCache", { capacity: 3 });
    });
