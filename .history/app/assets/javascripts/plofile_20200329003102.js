window.addEventListener('DOMContentLoaded', function(){
  $(function(){
    $(".plofile-image").on(hover)(
      function() {
        $(".plofile-hover").slideToggle()
      },
      function() {
        $(".plofile-hover").slideToggle()
      }
    )
  })
});