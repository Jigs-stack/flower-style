var hiddenButton = $('#action-button').hide();
var hiddenAnotherMessage = $('.another-message').hide();

$(document).ready(function() {
  const $messageElement = $("#message");
  const message = "Hello langga!, this is for you. Hope you like it";
  let index = 0;
  $("#message").css('font-size', '45px');
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
  playMusic("palagi", 15);
  $('.wrapper').hide();
  const c = setTimeout(() => {
    $("#body").removeClass("not-loaded");
    clearTimeout(c);
    
  }, 1000); 

  setTimeout(function() {
    hiddenAnotherMessage.show();
  }, 6000);
});


function playMusic(name, seconds){
  var audio = new Audio("./" + name + ".mp3");
  audio.currentTime = seconds;
  audio.play();
};
  
