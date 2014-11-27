$( document ).ready(function() {
    $(document).foundation({
      offcanvas : {
        open_method: 'overlap_single'
      }
    });
    $(document).foundation();
    $(document)
      .on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'hidden');
        $('.left-off-canvas-menu').css('height','100vh');
        $('.left-off-canvas-menu').css('top',$(window).scrollTop());
        $(document.body).trigger("sticky_kit:recalc");
      })
      .on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('.fixed').css('top', 0);
        $('.sidebar-left, .sidebar-right').css('top',0);
        $(document.body).trigger("sticky_kit:recalc");
        $('html').css('overflow', 'auto');
        $('left-off-canvas-menu').css('height','initial');
      })
      $(window).scroll(function(){
        $(document.body).trigger("sticky_kit:recalc");
      });
});
$(window).scroll(function(){
    $(document.body).trigger("sticky_kit:recalc");
});
$(window).load(function() {
    $(document.body).trigger("sticky_kit:recalc");
});
