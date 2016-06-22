/**
 * @license videogular v1.4.4 http://videogular.com
 * Two Fucking Developers http://twofuckingdevelopers.com
 * License: MIT
 */
/**
 * @ngdoc directive
 * @name com.2fdevs.videogular.plugins.overlayplay.directive:vgOverlayPlay
 * @restrict E
 * @description
 * Shows a big play button centered when player is paused or stopped.
 *
 * <pre>
 * <videogular vg-theme="config.theme.url" vg-autoplay="config.autoPlay">
 *    <vg-media vg-src="sources"></vg-media>
 *
 *    <vg-overlay-play></vg-overlay-play>
 * </videogular>
 * </pre>
 *
 */
"use strict";
angular.module("com.2fdevs.videogular.plugins.overlayplay", [])
    .run(
        ["$templateCache", function ($templateCache) {
            $templateCache.put("vg-templates/vg-overlay-play",
                '<div class="overlayPlayContainer">\
                  <div id="videoPrev" class="iconButton" ng-class="overlayPrevIcon" ng-click="onClickOverlayPrev()"><span>前一个视频</span></div>\
                  <div class="iconButton" ng-class="overlayPlayIcon" ng-click="onClickOverlayPlay()"></div>\
                  <div id="videoNext" class="iconButton" ng-class="overlayNextIcon" ng-click="onClickOverlayNext()"><span>下一个视频</span></div>\
                </div>');
        }]
    )
    .directive("vgOverlayPlay", ["VG_STATES",
        function (VG_STATES) {
            return {
                restrict: "E",
                require: "^videogular",
                scope: {},
                templateUrl: function (elem, attrs) {
                    return attrs.vgTemplate || 'vg-templates/vg-overlay-play';
                },
                link: function (scope, elem, attr, API) {
                    var state = VG_STATES.STOP;
                    scope.onChangeState = function onChangeState(newState) {
                        state = newState;
                        switch (newState) {
                            case VG_STATES.PLAY:
                                scope.overlayPlayIcon = {};

                                scope.overlayPrevIcon = {};
                                scope.overlayNextIcon = {};

                                scope.$emit('videoState', 'play');
                                break;

                            case VG_STATES.PAUSE:
                                scope.overlayPlayIcon = {play: true};

                                scope.$emit('videoState', 'pause');

                                break;

                            case VG_STATES.STOP:
                                scope.overlayPlayIcon = {play: true};

                                scope.$emit('videoState', 'stop');
                                break;
                        }
                    };

                    scope.onClickOverlayPlay = function onClickOverlayPlay(event) {
                        API.playPause();
                    };

                    scope.onClickOverlayPrev = function onClickOverlayPrev(event) {
                        if (state == VG_STATES.PLAY) {
                            API.playPause();
                        } else {
                            scope.$emit('videoState', 'prevClicked');
                        }
                    };

                    scope.onClickOverlayNext = function onClickOverlayNext(event) {
                        if (state == VG_STATES.PLAY) {
                            API.playPause();
                        } else {
                            scope.$emit('videoState', 'nextClicked');
                        }
                    };

                    scope.overlayPlayIcon = {play: true};

                    scope.overlayPrevIcon = {};
                    scope.overlayNextIcon = {};

                    scope.$on('showEvent', function(event, data) {
                        console.log('showEvent:' + data + ' state :' + state);
                        if (state == VG_STATES.PLAY) {
                            console.log('ignore showevent:' + data);

                            //API.stop();
                            return;
                        }
                        if (data == 'prev') {
                            scope.overlayPrevIcon = {prev: true};
                        } else if (data == 'next') {
                            scope.overlayNextIcon = {next: true};
                        } else if (data == 'all') {
                            scope.overlayPrevIcon = {prev: true};
                            scope.overlayNextIcon = {next: true};
                        }
                    });

                    scope.$on('hideEvent', function(event, data) {
                         console.log('hideEvent:' + data);

                         //API.stop();

                        if (data == 'prev') {
                            scope.overlayPrevIcon = {};
                        } else if (data == 'next') {
                            scope.overlayNextIcon = {};
                        } else if (data == 'all') {
                            scope.overlayPrevIcon = {};
                            scope.overlayNextIcon = {};
                        }
                    });

                    scope.$on('alphaTabEvent', function(event, data) {
                        if (data == 'stop') {
                            console.log('alphaTabEvent: stop!!!');
                            API.stop();
                        }
                    });

                    scope.$watch(
                        function () {
                            return API.currentState;
                        },
                        function (newVal, oldVal) {
                            scope.onChangeState(newVal);
                        }
                    );
                }
            }
        }
    ]);
