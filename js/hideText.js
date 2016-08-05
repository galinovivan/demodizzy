
(function( $ ) {
  $.fn.hideText= function(options) {
  	
  	var settings = $.extend( {
      'speed' : undefined,
      'dataName' : 'element'
    }, options);

  	this.click(function(e){

      var block = $(e.target).data(settings['dataName']);
      if (block === undefined) return;
      $(block).slideToggle(settings['speed'], function() {
          if ($(e.target).hasClass('sprite-hide_up')) {
              $(e.target).removeClass('sprite-hide_up')
          } else {
              $(e.target).addClass('sprite-hide_up');
          }
      });
  		return;
  	});
  	
  	return this;
  };
})(jQuery);
