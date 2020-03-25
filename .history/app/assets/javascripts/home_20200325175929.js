window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.hover-home').css('color', 'red');
    },
    function() {
      $('.header-home').css('color', 'white');
    }
  );
});