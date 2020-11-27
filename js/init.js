$(document).ready(function () {
  $('.collapsible').collapsible();

  $('.carousel').carousel({
    duration: 200,
    dist: 0,
    shift: 0,
    padding: 0,
    numVisible: 1,
    fullWidth: true,
    indicators: false,
    noWrap: false,
    onCycleTo: function (ele, dragged) {
      if (dragged) { $('.collapsible').collapsible('open', $(ele).index()); }
    }
  });

  $(document).on("click", "ul.collapsible li", function () {
    var elem = document.querySelectorAll("ul.collapsible li");
    var index = "none"
    for (var i = 0; i < elem.length; i++) {
      if (elem[i].className == "active") {
        index = i;
      }
      $('.carousel').carousel('set', index);
    }
  });
});
