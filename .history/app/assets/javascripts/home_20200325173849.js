window.addEventListener('DOMContentLoaded', function(){
  $('.header-home').hover {
    console.log('jjj');
    function() {
      $('.header-home').css('color', 'red');
    }
    function() {
      $('.header-home').css('color', 'white');
    }
  };
});