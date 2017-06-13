const $ = require('jquery');

require('./routes/app');

var map;

    ymaps.ready(function(){

    var placemark = new ymaps.Placemark([53.890128, 27.536903],{
        hintContent: 'логистик'
    },
    {
        preset: 'twirl#redDotIcon'
    });

    map = new ymaps.Map(document.getElementById('map'), {
        center: [53.890128, 27.536903],
        zoom: 16,
        controls: [],
        behaviors: ["scrollZoom"]
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable("scrollZoom");
    // map.controls.add("zoomControl").add("typeSelector");
});

let menu = document.getElementById('main-menu')

window.addEventListener('scroll', function(e) {
    if(menu.classList.contains('main-menu-scroll') && window.pageYOffset < 40) {
        menu.classList.remove('main-menu-scroll');
    }
    if(window.pageYOffset > 40) {
        menu.classList.add('main-menu-scroll');
    }
})
