var hiddenButton = $('#action-button').hide();
var hiddenAnotherMessage = $('.another-message').hide();
$(document).ready(function() {
  window.alert("Please turn up your volume to max, and also please wait for the music to play :) <3");
  const $messageElement = $("#message");
  const message = "Hello langga!, this is for you!";
  let index = 0;
  $("#message").css('font-size', '20px');
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
  var audio = new Audio("palagi.mp3");
  audio.play();
  var hiddenContainer = $('.wrapper').hide();
  const c = setTimeout(() => {
    $("#body").removeClass("not-loaded");
    clearTimeout(c);
    
  }, 1000); 

  setTimeout(function() {
    hiddenAnotherMessage.show();
  }, 6000);
});


  

