window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow", fun)
      },
      function() {
        $(".plofile-hover").slideUp()
      }
    )
  })
});