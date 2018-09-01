$(document).ready(function () {
    var map = $('#mapplic').mapplic({
        source: 'https://cdn.rawgit.com/hskapare/alta/769ef7e9/mall.json',
        height: 460,
        mapfill: true,
        lightbox: true,
        developer: false,
        maxscale: 1
    });

    // EVENTS
    // Map ready
    map.on('mapready', function (e, self) {
        console.log('Map is ready!')
        // self grants direct access to the map object
        // The map will be focused on the washing machine by default
        //self.moveTo(0.67, 0.62, 3, 0);
    });

    // Location opened
    map.on('locationopened', function (e, location) {
        // location grants full access to the location
        console.log(location.title + ' opened.');
    });

    // Location closed
    map.on('locationclosed', function (e) {
        console.log('Location closed.');
    });

    // Level switched
    map.on('levelswitched', function (e, level) {
        console.log('Switched to ' + level + ' level.');
    });

    // Position changed
    map.on('positionchanged', function (e, self) {
        // self grants direct access to the map object
        //console.log('Pan or zoom performed, current scale: ' + self.scale);
    });

    // METHODS
    // Getting mapplic object
    var self = map.data('mapplic');

    map.on('locationclosed', function (e) {
        //console.log(self);
    });
});