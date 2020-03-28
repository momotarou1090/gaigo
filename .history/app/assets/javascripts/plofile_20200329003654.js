window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow", function(){
          $(".plofile-hover").show();
        });
      },
      function() {
        $(".plofile-hover").slideUp("slow", function(){
          $(".plofile-hover").hide();
        });
      }
    )
  })
});