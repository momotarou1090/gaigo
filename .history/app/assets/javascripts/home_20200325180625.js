window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.hover-home').css('color', '#378cc5');
    },
    function() {
      $('.hover-home').css('color', '#2ea3f2');
    }
  );
});