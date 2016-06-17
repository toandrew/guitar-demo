/**
 * this should be refactor later:
 * 1. use directive
 * 2. it's used somewhere, so it should be as a service? 
 */
app.controller('AlphaTabController', function($scope) {
    var at = $('#alphaTab');

    var playerReady = false;
    var playerState = 0;

    $scope.init = function() {
        //
        // 1. Load alphaTab
        at.alphaTab();

        // 
        // 2. Initialize Player and Setup Player UI
        $scope.as = at.alphaTab('playerInit', {
            asRoot: '/lib/alphaSynth/',
            swfObjectRoot: '/lib/alphaSynth/'
        }); // init alphaSynth

        var as = $scope.as;

        as.On('ready', function(r) {
            // load default data
            as.LoadSoundFontUrl('lib/alphaSynth/default.sf2');

            $scope.updateLayout();
        });

        as.On('soundFontLoad', function(loaded, full) {
            var percentage = ((loaded / full) * 100) | 0;
            $('#sfInfo .progress').text('(' + percentage + '%)');
        });

        as.On('soundFontLoaded', function() {
            $('#sfInfo').hide();
        });

        as.On('readyForPlay', function(r) {
            playerReady = r;
            updateControls();
        });

        as.On('playerStateChanged', function(s) {
            playerState = s;
            updateControls();
        });

        function updateControls() {
            if (!playerReady) {
                $('#loadingInfo').show()
                $('#controls button').attr('disabled', 'disabled');
                //$('#layoutButtons button').attr('disabled', 'disabled');
            } else {
                $('#loadingInfo').hide()
                $('#playPause').removeAttr('disabled');
                //$('#save').removeAttr('disabled');
                //$('#layoutButtons button').removeAttr('disabled');
                switch (playerState) {
                    case 0: // stopped
                        $('#playPause').text('Play').removeClass('pause').addClass('play');
                        $('#stop').attr('disabled', 'disabled');
                        break;
                    case 1: // playing
                        $('#playPause').text('Pause').removeClass('play').addClass('pause');
                        $('#stop').removeAttr('disabled');
                        break;
                    case 2: // paused
                        $('#playPause').text('Play').removeClass('pause').addClass('play');
                        $('#stop').removeAttr('disabled');
                        break;
                }
            }
        }

        //
        // 3. Add cursors (optional)
        at.alphaTab('playerCursor');
        // at.alphaTab('drop'); // drag and drop
    }

    $scope.playPauseQupu = function() {
        if (playerState == 1) {
            $scope.as.Pause();
        } else {
            $scope.as.Play();
        }
    }

    $scope.stopQupu = function() {
        $scope.as.Stop();
    }

    $scope.updateLayout = function() {
        var layout = $('#controls').data('layout');
        var scrollmode = $('#controls').data('scrollmode');

        console.log('updateLayout: layout[' + layout + ']scrollmode[' + scrollmode + ']');

        // update renderer
        var renderer = at.alphaTab('renderer');
        renderer.Settings.Layout.Mode = layout;
        renderer.Invalidate();

        // update player
        var context = at.data('alphaTab');
        context.cursorOptions.autoScroll = scrollmode;
        at.alphaTab('playerCursorUpdateBeat', context.cursorOptions.currentBeat);
    }



    $scope.$on('courseDataUpdated', function(evt, courseInfo) {
        console.log('evt:' + evt + ' data:' + courseInfo.qupu + ' tracks:' + courseInfo.tracks);

        // will change it later.
        var element = document.getElementById('alphaTab');
        element.dataset.file = courseInfo.qupu;
        element.dataset.tracks = courseInfo.tracks;

        $scope.init();
    });
});
