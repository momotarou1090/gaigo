window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown("slow").stop(false, true);
      },
      function() {
        $(".plofile-hover").slideUp("slow").stop(false, true);
      }
    )
  })
});