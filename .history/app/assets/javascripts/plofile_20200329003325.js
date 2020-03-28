window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow", function(){
          $(".plofile")
        })
      },
      function() {
        $(".plofile-hover").slideUp()
      }
    )
  })
});