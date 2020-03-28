window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow", function(){
          $(".plofile-image").on
        })
      },
      function() {
        $(".plofile-hover").slideUp()
      }
    )
  })
});