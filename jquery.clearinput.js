/*
jQuery Clear-Input plugin
v1.0
Author: Aidan Feldman
Site: http://github.com/afeld/jquery-clearinput
*/
(function( $ ){
  // sets the field to the empty-value if it has none
  function setIfEmpty(el){
    var $el = $(el);
    $el.val() || $el.val($el.data('empty-value'));
  }
  
  $.fn.clearInput = function(emptyValue){
    return this
      .each(function(){
        var $el = $(this),
          eltEmptyVal = emptyValue || $el.attr('data-empty-value');
      
        // store the value as a data property
        $el.data('empty-value', eltEmptyVal);
        setIfEmpty($el);
      })
      .focus(function(){
        var $el = $(this);
        if ($el.val() === $el.data('empty-value')){
          $el.val('');
        }
      })
      .blur(function(){
        setIfEmpty(this);
      });
  };
})( jQuery );
