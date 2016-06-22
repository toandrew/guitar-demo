app.controller('VideoController', ["$sce", function($sce) {
    this.config = {
        preload: "none",
        sources: [
        ],
        plugins: {
            controls: {
                autoHide: false,
                autoHideTime: 5000
            }
        }
    };
}]

);
