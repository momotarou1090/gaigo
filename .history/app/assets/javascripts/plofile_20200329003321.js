window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow", function(){
          $("")
        })
      },
      function() {
        $(".plofile-hover").slideUp()
      }
    )
  })
});