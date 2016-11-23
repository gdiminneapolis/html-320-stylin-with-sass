// Hide the giphy animated gifs
$(document).ready(
  function() {
    $('.hide-gif').on(
      'click',
      function(e) {
	$(this).parent().find('iframe').fadeToggle();
      }
    )
  }
)
