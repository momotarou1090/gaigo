window.addEventListener('DOMContentLoaded', function(){
  $('.hover').hover(
    function() {
      $('.header-home').css('color', 'red');
    },
    function() {
      $('.header-home').css('color', 'white');
    }
  );
});