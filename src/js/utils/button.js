const $ = require('jquery');

(function (window, $) {

  $(function() {

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

  });

})(window, $);
