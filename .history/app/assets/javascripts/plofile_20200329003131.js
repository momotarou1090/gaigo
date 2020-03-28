window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown()
      },
      function() {
        $(".plofile-hover").slideToggle()
      }
    )
  })
});