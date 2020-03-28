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