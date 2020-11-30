jQuery(document).ready(($) => {
  $(".level-bar-inner").css("width", "0");

  $(window).on("load", () => {
    $(".level-bar-inner").each(() => {
      var width = $(this).data("level");
      $(this).animate({ width }, 800);
    });
  });
});
