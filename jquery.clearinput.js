/*
jQuery Clear-Input plugin
v1.0
Author: Aidan Feldman
Site: http://github.com/afeld/jquery-clearinput
*/
(function( $ ){
  var EMPTY_CLASS = 'is-empty',
    PRESENT_CLASS = 'is-present';

  function isContentEditable(el){
    var contentEditable = $(el).attr('contenteditable');
    return contentEditable === '' || contentEditable === 'true';
  }
  
  // sets the field to the empty-value if it has none
  function setIfEmpty(el){
    var $el = $(el),
      contentEditable = isContentEditable($el),
      emptyVal = $el.data('empty-value');
    
    if (contentEditable && !$el.text()){
      $el.text(emptyVal);
      setClasses($el, true);
    } else if (!contentEditable && !$el.val()) {
      $el.val(emptyVal);
      setClasses($el, true);
    }
  }
  
  function setClasses($el, isEmpty){
    if (isEmpty){
      $el.removeClass(PRESENT_CLASS).addClass(EMPTY_CLASS);
    } else {
      $el.removeClass(EMPTY_CLASS).addClass(PRESENT_CLASS);
    }
  }

  function onFocus(){
    var $el = $(this),
      elEmptyVal = $el.data('empty-value');
    
    if (isContentEditable($el) && $el.text() === elEmptyVal){
      // contenteditable field
      $el.text('');
      setClasses($el, false);
      
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
      setClasses($el, false);
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
