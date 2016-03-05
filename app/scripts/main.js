(function($) {
  $(document).ready(function() {
    $('.sticky').hide();
		$('#return-to-top').hide();
    $('.click-scroll-down').on('click', function() {
      $(this).hide();
    });
    $.fn.carousel.Constructor.TRANSITION_DURATION = 1500;

    $('.carousel').carousel({
      pause: "false"
    });

    var placeHolder;

    if ($(window).width() > 767) {
      $('body').scrollspy({
        target: '.menu-primary-menu-container',
        offset: 85
      });
    } else {
      $('body').scrollspy({
        target: '.menu-primary-menu-container'
      });
    }

    $(window).scroll(function() {
      if ($(window).width() > 767 && $(document).scrollTop() > 100) {
        if (!$('.sticky').is(":visible")) {
          $('.sticky').fadeIn('slow');
					$('#return-to-top').show();
          $('.click-scroll-down').fadeOut();
        }
      } else {
        $('.sticky').hide();
				$('#return-to-top').hide();
      }
    });

    $('header nav a:not(.btn-brand), body.home header .brand a, .click-scroll-down a').click(function(e) {
      // $('header nav a, body.home header .brand a').click(function(e) {
      e.preventDefault();
      if ($(window).width() > 767) {
        $(window).scrollTo($(this).attr('href'), 500, {
          offset: -84
        });
      } else {
        $(window).scrollTo($(this).attr('href'), 500, {
          offset: -130
        });
      }
    });


    if ($(window).width() < 768) {
      $('nav.nav-primary a').click(function() {
        $('button.navbar-toggle').trigger('click');
      });
    }

    if ($(window).width() > 767) {
      $(window).scroll(_.throttle(function() {
        var scroll = $(window).scrollTop();
        var halfheight = $(window).height() / 2;

        if ($('.message-bubbles').offset() && scroll > $('.message-bubbles').offset().top - halfheight) {
          $('.message-bubbles').children().addClass('animated');
        }

      }, 500));
    }

    $('.return-to-top').click(function(e) {
      e.preventDefault();
      $(window).scrollTo(0, 500);
    });

    // How It Works Block
    var howItWorksHeight = $('.how-it-works-block-wrapper').height() + 60;

    $(window).load(function(){
      $('.how-it-works-block-wrapper').css('top', -howItWorksHeight);
      $('.how-it-works-block-wrapper').removeClass('no-opacity');
    });

    $('a.collapse-toggle:not(.dismiss)').click(function(e){
      e.preventDefault();
      $($(this).attr('href')).addClass('animated');
      $($(this).attr('href')).removeAttr('style');
      $('.main').css('margin-top', howItWorksHeight);
      $(window).scrollTo(0, 500);
    });

    $('.dismiss').click(function(e){
      e.preventDefault();
      $($(this).attr('href')).removeClass('animated');
      $($(this).attr('href')).css('top', -howItWorksHeight);
      $('.main').removeAttr('style');
    });

  });
})(jQuery);
