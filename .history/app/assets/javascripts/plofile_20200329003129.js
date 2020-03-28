window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slide()
      },
      function() {
        $(".plofile-hover").slideToggle()
      }
    )
  })
});