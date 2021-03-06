/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   EventController.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: anonymous <anonymous@student.42.fr>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2016/06/12 13:35:03 by anonymous         #+#    #+#             */
/*   Updated: 2016/06/14 16:36:30 by anonymous        ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll, $routeParams, $route) {

        // $scope.snippet = "<span style='color:red'>Hi There</span>";
        // $scope.boolValue = true;
        // $scope.myStyle = { color: "red" };
        // $scope.myClass = "blue";
        // $scope.buttonDisabled = true;


        $scope.sortOrder = "name";

        // eventData.getEvent(function(event) {
        //     $scope.event = event;
        // });
        // eventData.getEvent()
        //     .success(function(event) { $scope.event = event; })
        //     .error(function(data, status, headers, config) {
        //         $log.warn(data, status, headers(), config);
        //     });
        // eventData.getEvent($routeParams.eventId)
        //     .$promise
        //     .then(function(event) { $scope.event = event;console.log(event); })
        //     .catch(function(response) { console.log(response); });

        // $scope.event = eventData.getEvent($routeParams.eventId);
        $scope.event = $route.current.locals.event;

        console.log($route.current.pathParams.eventId);
        $scope.reload = function() {
            $route.reload();
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function() {
            $anchorScroll();
        }

    });
