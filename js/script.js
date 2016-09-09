
  // Load Twitter Follow Me Button 
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

    
    
    

$(document).ready(function($){
  
   // Smooth Scrolling Plugin
      var $root = $('html, body');
        $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
          $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });
    
     // Stellar
        $.stellar();
    
    // Tooltip Link 
      $(function() {
        $('#item1').tooltip();
      });
 
    // Tooltip Button
      $(function() {
        $('[data-toggle="tooltip"]').tooltip();
      });
 
      // Pink background color in message-box
      $(".message-box").css("background-color", "pink");
   
      // Message-box comment on click
      $('#button').on('click', function() {
        var comment = $(".message-box").val();
        $('#visible-comment').html(comment);
        $('.message-box').hide();
        
        //console.log(comment);
        return false;
      });

      
}); // end of JavaScript //





