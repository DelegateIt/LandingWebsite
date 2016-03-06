(function($) {
  $(document).ready(function() {

    // Hide Elements
    $('.sticky').hide().removeClass('no-opacity');
    $('#return-to-top').hide();
    $('.how-it-works-block-wrapper').hide().removeClass('no-opacity');

    // Window resize reload hack for how-it-works-block-wrapper
    $(window).resize(function() {
      setTimeout(function() {
        location.reload();
      }, 300);
    });

    // Carousel
    $.fn.carousel.Constructor.TRANSITION_DURATION = 1500;
    $('.carousel').carousel({
      pause: "false"
    });

    // Scrollspy
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

    // return-to-top appear after scroll
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

    // Smooth Scroll
    $('header nav a:not(.btn-brand), body.home header .brand a, .click-scroll-down a').on('click', function(e) {
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
      $('nav.nav-primary a').on('click', function() {
        $('button.navbar-toggle').trigger('click');
      });
    }

    if ($(window).width() > 767) {
      $(window).scroll(_.throttle(function() {
        var scroll = $(window).scrollTop();
        var halfheight = $(window).height() / 2;

        if ($('.message-bubbles').offset() && scroll > $('.message-bubbles').offset().top - halfheight - 100) {
          $('.message-bubbles').children().addClass('animated');
        }

      }, 500));
    }


    // Click events
    $('.click-scroll-down').on('click', function(e) {
      e.preventDefault();
      $(this).hide();
    });
    $('.return-to-top').on('click', function(e) {
      e.preventDefault();
      $(window).scrollTo(0, 500);
    });

    // How it works
    var dismissHowItWorks = function(item) {
      var howItWorksHeight = $('.how-it-works-block-wrapper').height() + 60;
      $($(item).attr('href')).removeClass('animated');
      $($(item).attr('href')).css('top', -1 * howItWorksHeight);
      $('.main').removeAttr('style');
    };
    var toggleHowItWorks = function(item) {
      var howItWorksHeight = $('.how-it-works-block-wrapper').height() + 60;
      $($(item).attr('href')).addClass('animated');
      $($(item).attr('href')).removeAttr('style');
      $('.main').css('margin-top', howItWorksHeight);
      $(window).scrollTo(0, 500);
    };
    dismissHowItWorks();
    $('a.collapse-toggle:not(.dismiss)').click(function(e) {
      e.preventDefault();
      toggleHowItWorks(this);
    });
    $('.dismiss').on('click', function(e) {
      e.preventDefault();
      dismissHowItWorks(this);
    });

  });
})(jQuery);
