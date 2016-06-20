/**
 * this should be refactor later:
 * 1. use directive
 * 2. it's used somewhere, so it should be as a service? 
 */
app.controller('AlphaTabController', function($scope) {
    var playerReady = false;
    var playerState = 0;


    $scope.metronomes = [{ id: 0, name: '请选择节拍器'}, { id: 1, name: '半速' }, { id: 2, name: '全速' }];
    $scope.mymetronome = $scope.metronomes[0];

    $scope.init = function() {
        $scope.at = $('#alphaTab');

        var at = $scope.at;

        $.alphaTab.restore('#alphaTab');

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

                $('#playPause').attr('disabled', 'disabled');
                $('#stop').attr('disabled', 'disabled');
            } else {
                $('#loadingInfo').hide()
                $('#playPause').removeAttr('disabled');
                //$('#save').removeAttr('disabled');
                //$('#layoutButtons button').removeAttr('disabled');
                switch (playerState) {
                    case 0: // stopped
                        $('#playPause').removeClass('pause').addClass('play');
                        $('#stop').attr('disabled', 'disabled');
                        break;
                    case 1: // playing
                        $('#playPause').removeClass('play').addClass('pause');
                        $('#stop').removeAttr('disabled');
                        break;
                    case 2: // paused
                        $('#playPause').removeClass('pause').addClass('play');
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
        var context = $scope.at.data('alphaTab');
        context.cursorOptions.autoScroll = scrollmode;
        $scope.at.alphaTab('playerCursorUpdateBeat', context.cursorOptions.currentBeat);
    }

    $scope.$on('qupuUpdated', function(evt, info) {
        console.log('evt:' + evt + ' data:' + info.qupu + ' tracks:' + info.tracks);

        // will change it later.
        var element = document.getElementById('alphaTab');
        element.dataset.file = info.qupu;
        element.dataset.tracks = info.tracks;

        $scope.init();
    });
});
