$( document ).ready(function() {
    $(document).foundation({
      offcanvas : {
        open_method: 'overlap_single'
      }
    });
    $(document).foundation();
    $(document)
      .on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('.left-off-canvas-menu').css('position','fixed');
        $('.left-off-canvas-menu').css('top', $('.fixed_wrapper').height());
        $('.left-off-canvas-menu').css('height',$(window).height()-$('.fixed_wrapper').height());
        $('.left-off-canvas-menu').css('box-shadow','5px 0px 5px #888888');
        $(document.body).trigger("sticky_kit:recalc");
      })
      .on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
          window.setTimeout(function(){$('.left-off-canvas-menu').attr('style','')}, 500);
        $(document.body).trigger("sticky_kit:recalc");
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
