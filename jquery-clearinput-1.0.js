/*
USAGE
Add the class .clear-input to any input element
whose value you want cleared when it gains focus.
The initial value will be replaced when the input
loses focus, and no new text has been entered.
*/
(function( $ ){
  // define the initialValue() function
  $.fn.initialValue = function(value) {
    if (value) {
      return this.attr('initial-value', value);
    } else {
      return this.attr('initial-value');
    }
  };

  // apply plugin to all inputs with class ".clear-input"
  $(function() {
    $('input.clear-input')
      .focus(function(){
        if (this.value == $(this).initialValue()) {
          this.value = '';
        }
      })
      .blur(function(){
        if (this.value == '') {
          this.value = $(this).initialValue();
        }
      })
      .each(function(index, elt) {
        $(this).initialValue(this.value);
      });
  });
})( jQuery );