/*
jQuery Clear-Input plugin
v1.0
Author: Aidan Feldman
Site: http://github.com/afeld/jquery-clearinput
*/
(function( $ ){
  function isContentEditable(el){
    var contentEditable = $(el).attr('contenteditable');
    return contentEditable === '' || contentEditable === 'true';
  }
  
  // sets the field to the empty-value if it has none
  function setIfEmpty(el){
    var $el = $(el),
      emptyVal = $el.data('empty-value');
    
    if (isContentEditable($el)){
      $el.text() || $el.text(emptyVal);
    } else {
      $el.val() || $el.val(emptyVal);
    }
  }
  
  function onFocus(){
    var $el = $(this),
      elEmptyVal = $el.data('empty-value');
    
    if (isContentEditable($el) && $el.text() === elEmptyVal){
      // contenteditable field
      $el.text('');
      
      // This is a bit of a hack to ensure the cursor will always appear
      // after the contents are cleared.  This probably isn't supported in
      // all browsers.
      if (document.createRange && window.getSelection){
        var range = document.createRange()
        range.selectNodeContents(this);
        range.collapse(true);
        window.getSelection().addRange(range);
      }
      
    } else if ($el.val() === elEmptyVal){
      // normal input field
      $el.val('');
    }
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
      .focus(onFocus)
      .blur(function(){
        setIfEmpty(this);
      });
  };
})( jQuery );
