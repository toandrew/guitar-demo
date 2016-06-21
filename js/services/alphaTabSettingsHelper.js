app.factory('alphaTabSettingsHelper', function() {
    var getAlphaTabSettings = function(alphaTabConfig, defaultSettings) {
        var layout = alphaTabConfig.layout;

        var settings = defaultSettings;

        settings.Scale = 1;
        settings.Layout.Mode = layout;
        settings.Layout.AdditionalSettings['autoSize'] = true;
        settings.Width = 950;
        switch (settings.Layout.Mode) {
            case 'page':
                settings.Layout.AdditionalSettings['start'] = 1;
                //settings.Layout.AdditionalSettings['count'] = -1;
                break;
            case 'horizontal':
                settings.Layout.AdditionalSettings['start'] = 1;
                //settings.Layout.AdditionalSettings['count'] = -1;
                break;
        }
        settings.Layout.AdditionalSettings['hideInfo'] = false;
        settings.Layout.AdditionalSettings['barsPerRow'] = -1;

        settings.Staves = [];
        settings.Staves.push(new AlphaTab.StaveSettings("marker"));
        //settings.staves.Add(new StaveSettings("triplet-feel"));
        settings.Staves.push(new AlphaTab.StaveSettings("tempo"));
        settings.Staves.push(new AlphaTab.StaveSettings("text"));
        settings.Staves.push(new AlphaTab.StaveSettings("chords"));
        settings.Staves.push(new AlphaTab.StaveSettings("trill"));
        settings.Staves.push(new AlphaTab.StaveSettings("beat-vibrato"));
        settings.Staves.push(new AlphaTab.StaveSettings("note-vibrato"));
        settings.Staves.push(new AlphaTab.StaveSettings("alternate-endings"));
        //settings.Staves.push(new AlphaTab.StaveSettings("score"));
        settings.Staves.push(new AlphaTab.StaveSettings("crescendo"));
        settings.Staves.push(new AlphaTab.StaveSettings("dynamics"));
        settings.Staves.push(new AlphaTab.StaveSettings("trill"));
        settings.Staves.push(new AlphaTab.StaveSettings("beat-vibrato"));
        settings.Staves.push(new AlphaTab.StaveSettings("note-vibrato"));
        settings.Staves.push(new AlphaTab.StaveSettings("tap"));
        settings.Staves.push(new AlphaTab.StaveSettings("fade-in"));
        settings.Staves.push(new AlphaTab.StaveSettings("harmonics"));
        settings.Staves.push(new AlphaTab.StaveSettings("let-ring"));
        settings.Staves.push(new AlphaTab.StaveSettings("palm-mute"));
        settings.Staves.push(new AlphaTab.StaveSettings("tab"));
        settings.Staves.push(new AlphaTab.StaveSettings("pick-stroke"));

        return settings;
    }

    function getCourseSettings(alphaTabConfig, defaultSettings) {
        return this.getAlphaTabSettings();
    }

    function getQupuSettings(alphaTabConfig, defaultSettings) {
        return this.getAlphaTabSettings();
    }

    return {
        getAlphaTabSettings: getAlphaTabSettings,
        getCourseAlphaTabSettings: getCourseSettings,
        getQupuAlphaTabSettings: getQupuSettings
    }
});
