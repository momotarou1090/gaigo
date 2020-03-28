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
        $(".kijima-hover").slideDown(200);
      },
      function() {
        $(".kijima-hover").slideUp(200);
      }
    )
  })
});