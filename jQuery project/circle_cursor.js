
/*    
    jQuery Circle Cursor
    
    Copyright (c) 2017 Michał Marchewczyk
    
    Licensed under the MIT license
*/

console.log("Circle Cursor jQuery plugin loaded");
(function ( $ ) {
 
    $.fn.circursor = function( options ) {
 
        var options = $.extend({
            size1: "30px",
            size2: "10px",
            width: "5px",
            color: "white",
            duration: "1000",
            easing: "easeOutQuint",
           
        }, options );
 
      return this.each(function() {
        var container = $(this);
          $(this).find('html').filter(function () { return $(this).css('cursor') == "none" }).addClass("circle_pointer");
          $(this).find('html').filter(function () { return $(this).css('cursor') !== 'none'}).css("cursor", "none");
          $(this).css("cursor", "none");
 
          
     
          $(this).append("<div id='circle_cursor' style='position: fixed; z-index: 1000; pointer-events: none; overflow: visible;color:#34AD54;'><div style='position: absolute; top: 0px; left: 0px; transform: translate(-50%, -50%); border-radius: 1000px; width: " + options.size1 + "; height: " + options.size1 + "; background: radial-gradient(circle, rgba(52,173,84,1) 0%, rgba(0,255,11,1) 7%, rgba(227,156,56,1) 51%, rgba(255,153,51,1) 100%);box-shadow:0 0 20px rgba(255,153,51,1); border-style: solid; border-width: " + options.width + ";  " + options.color + ";'></div></div>");
          $(this).mousemove(function (event) {
            $(this).find("#circle_cursor").css('left', event.clientX).css('top', event.clientY);
           });
          $(this).on('mouseover', '.circle_pointer',function(event){
            container.find("#circle_cursor").children().stop().animate({width: options.size2, height: options.size2}, {duration: options.duration, easing: options.easing});
          }).on('mouseout', '.circle_pointer', function(event){
            container.find("#circle_cursor").children().stop().animate({width: options.size1, height: options.size1}, {duration: options.duration, easing: options.easing});
          });
      });
 
    };
 
}( jQuery ));
