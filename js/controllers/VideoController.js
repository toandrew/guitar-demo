app.controller('VideoController', ["$sce", function($sce) {
    this.config = {
        preload: "none",
        sources: [
            { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4" },
            { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm" },
            { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg" }
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
