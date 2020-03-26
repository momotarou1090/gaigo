window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".toggle-icon").on("click", function() {
      $(this).next().slideToggle();
    });
    $("#acMenu dt").on("click", function() {
      $("#acMenu dt").hide();
      return false;
    });
    $(".x-icon").on("click", function() {
      $("#acMenu dd").hide();
      return false;
    });
    $(".x-icon").on("click", function() {
      $("#acMenu dt").show();
    });
  });
});

window.addEventListener('DOMContentLoaded', function(){
  $('.hover-home').hover(
    function() {
      $('.hover-home').css('color', '#378cc5');
    },
    function() {
      $('.hover-home').css('color', '#2ea3f2');
    }
  );
  $('.hover-plofile').hover(
    function() {
      $('.hover-plofile').css('color', '#378cc5');
    },
    function() {
      $('.hover-plofile').css('color', '#2ea3f2');
    }
  );
  $('.hover-event').hover(
    function() {
      $('.hover-event').css('color', '#378cc5');
    },
    function() {
      $('.hover-event').css('color', '#2ea3f2');
    }
  );
  $('.hover-history').hover(
    function() {
      $('.hover-history').css('color', '#378cc5');
    },
    function() {
      $('.hover-history').css('color', '#2ea3f2');
    }
  );
  $('.hover-movie').hover(
    function() {
      $('.hover-movie').css('color', '#378cc5');
    },
    function() {
      $('.hover-movie').css('color', '#2ea3f2');
    }
  );
  $('.hover-contact').hover(
    function() {
      $('.hover-contact').css('color', '#378cc5');
    },
    function() {
      $('.hover-contact').css('color', '#2ea3f2');
    }
  );
});