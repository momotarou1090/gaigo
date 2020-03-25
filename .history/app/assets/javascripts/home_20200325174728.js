window.addEventListener('DOMContentLoaded', function(){
  $('.header-home').hover(
    function() {
      $('.header-home').css('color', 'red');
    },
    function() {
      $('.header')
    }
  )
});