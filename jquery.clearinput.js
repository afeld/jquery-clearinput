/*
jQuery Clear-Input plugin
v1.0
Author: Aidan Feldman

USAGE
Add the class .clear-input to any text input element
whose value you want cleared when it gains focus.
The initial value will be replaced when the input
loses focus, and no new text has been entered.

If you prefer to not add classes to your elements,
you can alternatively call clearInput() on any jQuery
input object.
*/
(function( $ ){
  $.fn.clearInput = function(emptyValue){
    return this
      .each(function(){
        var $el = $(this),
          eltEmptyVal = emptyValue || $el.attr('data-empty-value');
      
        // store the value as a data property
        $el.data('empty-value', eltEmptyVal);
        // initialize the field if it has no value
        $el.val() || $el.val(eltEmptyVal);
      })
      .focus(function(){
        var $el = $(this);
        if ($el.val() === $el.data('empty-value')){
          $el.val('');
        }
      })
      .blur(function(){
        var $el = $(this);
        if (!$el.val()){
          $el.val($el.data('empty-value'));
        }
      });
  };
})( jQuery );
