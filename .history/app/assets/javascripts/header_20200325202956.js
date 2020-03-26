window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".toggle-icon").on("click", function() {
      $(".toggle-opened").slideToggle();
    });
    $("toggle-icon").on("click", function() {
      $("toggle-icon").hide();
      return false;
    });
    $(".x-icon").on("click", function() {
      $(".toggle-opened").hide();
      return false;
    });
    $(".x-icon").on("click", function() {
      $(".toggle-icon").show();
    });
  });
});

window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.hover-home').css('color', 'skyblue');
    },
    function() {
      $('.hover-home').css('color', '#2ea3f2');
    }
  );
  $('.hover-plofile').hover(
    function() {
      $('.hover-plofile').css('color', 'skyblue');
    },
    function() {
      $('.hover-plofile').css('color', '#2ea3f2');
    }
  );
  $('.hover-event').hover(
    function() {
      $('.hover-event').css('color', 'skyblue');
    },
    function() {
      $('.hover-event').css('color', '#2ea3f2');
    }
  );
  $('.hover-history').hover(
    function() {
      $('.hover-history').css('color', 'skyblue');
    },
    function() {
      $('.hover-history').css('color', '#2ea3f2');
    }
  );
  $('.hover-movie').hover(
    function() {
      $('.hover-movie').css('color', 'skyblue');
    },
    function() {
      $('.hover-movie').css('color', '#2ea3f2');
    }
  );
  $('.hover-contact').hover(
    function() {
      $('.hover-contact').css('color', 'skyblue');
    },
    function() {
      $('.hover-contact').css('color', '#2ea3f2');
    }
  );
  $('.hover-contact').hover(
    $('.items').css()
  )
});