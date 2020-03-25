window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.hover-home').css('color', '');
    },
    function() {
      $('.hover-home').css('color', '#2ea3f2;');
    }
  );
});