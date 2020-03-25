window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.').css('color', 'red');
    },
    function() {
      $('.header-home').css('color', 'white');
    }
  );
});