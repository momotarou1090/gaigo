window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown(slow", show)
      },
      function() {
        $(".plofile-hover").slideUp()
      }
    )
  })
});