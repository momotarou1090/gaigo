window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.header-home').css('color', 'red');
    },
    function() {
      $('.header-home').css('color', 'white');
    }
  );
});