      $( document ).ready(function() {
        $(".preloaded .sidebar-left, .preloaded .sidebar-right").stick_in_parent({
          parent: $(".preloaded.row"),
          offset_top:120
        })

        //From https://github.com/leafo/sticky-kit/issues/31#issuecomment-51740033
        //Fixes stickyness issue when new content added
        $('.preloaded .sidebar-left, .preloaded .sidebar-right')
        .on('sticky_kit:bottom', function(e) {
          $(this).parent().css('position', 'static');
        })
        .on('sticky_kit:unbottom', function(e) {
          $(this).parent().css('position', 'relative');
        });
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
      $( "#loadMore" ).click(function() {
        $("div.row.hide").removeClass("hide");
        $("#loadMore").addClass("hide");
        $(".loaded .sidebar-left, .loaded .sidebar-right").stick_in_parent({offset_top:120});
        $(document.body).trigger("sticky_kit:recalc");
        // Init Skrollr
        var s = skrollr.init();
        // Refresh Skrollr after resizing our sections
        s.refresh($('.homeSlide'));
      });
      //hack todo fixme gross
 
