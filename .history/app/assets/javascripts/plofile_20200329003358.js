window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow", function(){
          $(".plofile-image").show
        })
      },
      function() {
        $(".plofile-hover").slideUp()
      }
    )
  })
});