/* [URL] */
;(function($, window, document, undefined) {

  var r = $.ras.slideshow;
  
  r.autoslide = {
    options : {
      time:2000,
      textPlay:'play',
      textPause:'pause',
      duration:700
    }
  };
  
  $.fn.autoslide = function(options) {
    
    options = $.extend({}, r.autoslide.options, options);
    return this.each(function(){
      var slideshow = $(this),
          parentSlideshow = $(this).parent().parent(),
          navAutoSlide = '<button id="playRas">'+options.textPlay+'</button><button id="stopRas">'+options.textPause+'</button>',
          navRas = parentSlideshow.find('#navRAS');
      
      navRas.append(navAutoSlide);
      
      var playBtn = navRas.find('#playRas'),
          stopBtn = navRas.find('#stopRas')
      
      stopFct = function() {
        autoSlideShow = clearInterval(autoSlideShow);
      };
      
      playFct = function() {
        autoSlideShow = setInterval(function(){$.fn.ras.slide(slideshow, 'next', options.duration)}, options.time);
      };
      
      //Slide
      playFct();
      
      //button to slide
      playBtn.bind('click', function(){
        playFct();
      });
      
      //button to stop slide
      stopBtn.bind('click', function(){
        stopFct();
      });
       
      
    });
    
  };
  
})(jQuery, window, document);