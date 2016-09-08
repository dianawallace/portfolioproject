
  // Load Twitter Follow Me Button 
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

    // Load Facebook SDK for JavaScript 
    <div id="fb-root"></div>
        (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

$(document).ready(function(){
  
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
 
}); // end of JavaScript //





