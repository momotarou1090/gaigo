window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown(200);
      },
      function() {
        $(".plofile-hover").slideUp(200);
      }
    )
  })
});