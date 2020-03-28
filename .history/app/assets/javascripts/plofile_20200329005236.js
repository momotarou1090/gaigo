window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown(200).stop(false, true);
      },
      function() {
        $(".plofile-hover").slideUp(200);
      }
    )
  })
});