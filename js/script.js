
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

      // Message-box comment on click
      //$('#button').on('click', function() {
        //var comment = $(".message-box").val();
        //$('#visible-comment').html(comment);
       // $('.message-box').hide();
        
       // console.log(comment);
      //  return false;
     // });
      
      // key up event 
      $('.message-box').on('keyup', function() {
        console.log('keyup happened'); // this is where we make sure keyup is working
      // charCount event  
      var charCount = $('.message-box').val().length; // this is where we set the length of the content of the textarea to a variable
        console.log('charCount');
          $('#char-count').html(charCount); // this is where we show a running character count to the user
     
        if (charCount > 50) {
          // turn character count red
          $('#char-count').css('color', 'red');
          } else {
          // needs to be black
          $('#char-count').css('color', 'black');
       }
      });
       
       
       // Pink background color in message-box
      $(".message-box").css("background-color", "pink");
      
        // no comment click event      
       $('#button').on('click', function() {
         console.log('comment');
       
          var comment = $('.message-box').val();
          if (comment === "") {
          // turn border of message box red
          $('textarea').css('border', '2px solid red');
          
            return true;
            
          } else {        
            $('#visible-comment').html('Thanks!');
            $('.message-box').hide(600);
            
            return false;
          }
        });
        
     var works = [
  "images/american_gothic_parody.png",
    
  "images/lady_gaga.png",
    
  "images/playing_card.png",
  
  "images/fantasy_illustration.png"
  ] 
        
  // Work section
    for (var i = 0; i < works.length; ++i ) {
      $("#projects").append("\
        <div class='col-sm-6 col-md-3'>\
          <img class='img-responsive' src='" + works[i] + "'>\
        </div>\
      ");
    };
    
    
    
    

}); // end of JavaScript //





