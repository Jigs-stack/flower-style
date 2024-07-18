
var hiddenButton = $('#action-button').hide();
var hiddenAnotherMessage = $('.another-message').hide();
$(document).ready(function() {
  const $messageElement = $("#message");
  const message = "Hello langggingggg, this is for you!";
  let index = 0;
  $("#message").css('font-size', '50px');
  function typeWriter() {
      if (index < message.length) {
          $messageElement.text($messageElement.text() + message.charAt(index));
          index++;
          setTimeout(typeWriter, 100);
          
      }
      else {
        hiddenButton.show();
      }
  }

  typeWriter();
});
var hiddenFlowers = $("#body").hide();

$("#action-button").click(function() {
  hiddenFlowers.show();
  var hiddenContainer = $('.wrapper').hide();
  const c = setTimeout(() => {
    $("#body").removeClass("not-loaded");
    clearTimeout(c);
    
  }, 1000); 

  setTimeout(function() {
    hiddenAnotherMessage.show();
  }, 6000);
});

  

