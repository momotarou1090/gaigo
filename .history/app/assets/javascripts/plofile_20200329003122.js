window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideToggle()
      },
      function() {
        $(".plofile-hover").slideToggle()
      }
    )
  })
});