window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideToggle(slow)
      },
      function() {
        $(".plofile-hover").slideToggle(slow)
      }
    )
  })
});