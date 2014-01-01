/*!
 * jQuery Jumpout - A simple Popup Plugin
 * -------------------------------------------------------------------
 *
 * jQuery Jumpout is a plugin that only consider popout
 *
 * Licensed under The MIT License
 *
 * @version        0.1.0
 * @since          2014.1.1
 * @author         Nathan Cheng
 *
 * Usage:
 * -------------------------------------------------------------------
 * //test.js.erb
 * $("body").append("<%= j render("test_jumpout") %>");
 * $("#js-test-jumpout").jumpout(function(){
 *   $("#js-test-jumpout").click(function(event) {
 *     $("#js-test-jumpout").closeJumpout();
 *   });
 * });
 * <div id="js-test-jumpout"></div>
 *
 */

(function( $, undefined ) {
  
  jQuery.fn.extend({
    jumpout:function(callback)
    {
      var target    = this;
      var jumpoutShade = $("#js-jumpout-shade");
      var jumpOutBox = $("#js-jump-out");
      if(!jumpOutBox.get(0)){
        var jumpOutBoxHtml = '<div class="pathsource-nathan-jump-out" id="js-jump-out"></div>';
        var jumpoutShadeHtml = '<div class="jumpout-shade" id="js-jumpout-shade" style="display:none"></div>';
        $("body").append(jumpoutShadeHtml);
        $("body").append(jumpOutBoxHtml);
        jumpOutBox = $("#js-jump-out");
        jumpoutShade = $("#js-jumpout-shade");
      }
      jumpoutShade.show();
      jumpOutBox.html(this);

      var width = parseInt(this.css("width"), 0);
      var height = parseInt(this.css("height"), 0);
      var marginLeft = -(width / 2);
      var marginTop = -(height / 2);
      jumpOutBox.css({
        "margin-left": marginLeft,
        "margin-top": marginLeft
      });

      if(callback){
        callback();
      }
    },
    closeJumpout:function()
    {
      $("#js-jumpout-shade").remove();
      $("#js-jump-out").remove();
    }
  });

})( jQuery );