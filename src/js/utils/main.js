// const $ = require('jquery');
// require('jquery-plugin-viewport-checker');

// const Swiper = require('../swipe/swiper.jquery.min.js');

var callback = {
    main: function(ctx,next){
        let menu = document.getElementById('main-menu');
        let button = document.getElementById('query-button');

        window.addEventListener('scroll', function(e) {
            if(menu.classList.contains('main-menu-scroll') && window.pageYOffset < 40) {
                menu.classList.remove('main-menu-scroll');
            }

            if(button.classList.contains('query-button-scroll') && window.pageYOffset < 40) {
                button.classList.remove('query-button-scroll');
            }

            if(window.pageYOffset > 40) {
                menu.classList.add('main-menu-scroll');
                button.classList.add('query-button-scroll');
            }

        })


        $('.bluemap-block__point').viewportChecker({
          classToRemove: 'invisible',
          classToAdd: 'visible animated zoomIn',
          offset: 100
        });

        $('button').on('click', function (event) {
          event.preventDefault();
        console.log('click');

          var $div = $('<div/>'),
              btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

          $div
            .addClass('circle')
            .css({
              top: yPos - 15,
              left: xPos - 15
            })
            .appendTo($(this));

          window.setTimeout(function(){
            $div.remove();
          }, 2000);
        });

    },
    directions: function(ctx,next) {
        $('button').on('click', function (event) {
          event.preventDefault();
        console.log('click');

          var $div = $('<div/>'),
              btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

          $div
            .addClass('circle')
            .css({
              top: yPos - 15,
              left: xPos - 15
            })
            .appendTo($(this));

          window.setTimeout(function(){
            $div.remove();
          }, 2000);
        });
    },
    services: function(ctx,next) {
        // $('.point-belarus').viewportChecker({
        //   classToRemove: 'invisible',
        //   classToAdd: 'visible animated zoomIn',
        //   offset: 100
        // });
        //
        // $('.point-usa').viewportChecker({
        //   classToRemove: 'invisible',
        //   classToAdd: 'visible animated zoomIn',
        //   offset: 100
        // });
        //
        // $('.point-germany').viewportChecker({
        //   classToRemove: 'invisible',
        //   classToAdd: 'visible animated zoomIn',
        //   offset: 100
        // });
        //
        // $('.point-russia').viewportChecker({
        //   classToRemove: 'invisible',
        //   classToAdd: 'visible animated zoomIn',
        //   offset: 100
        // });
        //
        // $('.point-india').viewportChecker({
        //   classToRemove: 'invisible',
        //   classToAdd: 'visible animated zoomIn',
        //   offset: 100
        // });
        //
        // $('.point-china').viewportChecker({
        //   classToRemove: 'invisible',
        //   classToAdd: 'visible animated zoomIn',
        //   offset: 100
        // });
        let button = document.getElementById('query-button');

        window.addEventListener('scroll', function(e) {
            if(button.classList.contains('query-button-scroll') && window.pageYOffset < 40) {
                button.classList.remove('query-button-scroll');
            }

            if(window.pageYOffset > 40) {
                button.classList.add('query-button-scroll');
            }

        })

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

        $('button').on('click', function (event) {
          event.preventDefault();
        console.log('click');

          var $div = $('<div/>'),
              btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

          $div
            .addClass('circle')
            .css({
              top: yPos - 15,
              left: xPos - 15
            })
            .appendTo($(this));

          window.setTimeout(function(){
            $div.remove();
          }, 2000);
        });
    },
    about: function(ctx,next){

        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            centeredSlides: true,
            initialSlide: 2,
            paginationClickable: true,
            spaceBetween: 30
        });

        $('button').on('click', function (event) {
          event.preventDefault();
        console.log('click');

          var $div = $('<div/>'),
              btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

          $div
            .addClass('circle')
            .css({
              top: yPos - 15,
              left: xPos - 15
            })
            .appendTo($(this));

          window.setTimeout(function(){
            $div.remove();
          }, 2000);
        });
    },
    vacancies: function(ctx,next){
        $('button').on('click', function (event) {
          event.preventDefault();
        console.log('click');

          var $div = $('<div/>'),
              btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

          $div
            .addClass('circle')
            .css({
              top: yPos - 15,
              left: xPos - 15
            })
            .appendTo($(this));

          window.setTimeout(function(){
            $div.remove();
          }, 2000);
        });
    },
    online: function(ctx,next) {
        console.log('online');
    },
    contacts: function(ctx,next){

        var textarea = document.querySelector('textarea');
        console.log(textarea);

        // textarea.addEventListener('click', function(e) {
        //     console.log('fd')
        // })
        textarea.addEventListener('keypress', function (){
          console.log('KY!');
          var el = this;
          setTimeout(function(){
            el.style.cssText = 'height:auto';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
          },0);
        });

        // function autosize(){
        //   console.log('KY!');
        //   var el = this;
        //   setTimeout(function(){
        //     el.style.cssText = 'height:auto; padding:10px';
        //     el.style.cssText = 'height:' + el.scrollHeight + 'px';
        //   },0);
        // }

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

        $('button').on('click', function (event) {
          event.preventDefault();
        console.log('click');

          var $div = $('<div/>'),
              btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;

          $div
            .addClass('circle')
            .css({
              top: yPos - 15,
              left: xPos - 15
            })
            .appendTo($(this));

          window.setTimeout(function(){
            $div.remove();
          }, 2000);
        });

        var textarea = document.querySelector('textarea');

        textarea.addEventListener('keydown', autosize);

        function autosize(){
          var el = this;
          setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
          },0);
        }
    }
}



module.exports = callback;
