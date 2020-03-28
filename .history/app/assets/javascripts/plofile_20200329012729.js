window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".inoue-plofile-image").hover(
      function() {
        $(".inoue-hover").slideDown(200);
      },
      function() {
        $(".inoue-hover").slideUp(200);
      }
    )
  })

  $(function(){
    $(".kijima-plofile-image").hover(
      function() {
        $(".plofile-hover").slideDown(200);
      },
      function() {
        $(".plofile-hover").slideUp(200);
      }
    )
  })
});