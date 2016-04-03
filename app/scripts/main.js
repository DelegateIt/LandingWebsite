(function($) {
  $(document).ready(function() {

    // Hide Elements
    $('.sticky').hide().removeClass('no-opacity');
    $('#return-to-top').hide();
    $('.how-it-works-block-wrapper').hide().removeClass('no-opacity');

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
    $('.click-scroll-down a').on('click', function(e) {
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


    $('.hero').css('height', window.innerHeight + 'px');

    // Click events
    $('.click-scroll-down').on('click', function(e) {
      e.preventDefault();
      $(this).hide();
    });

    $('.return-to-top').on('click', function(e) {
      e.preventDefault();
      $(window).scrollTo(0, 500);
    });

    // Phone input
    var telInput = $(".phone");
    var telAction = $(".phone-action");
    telAction.on("click", function() {
      submitPhone($(this));
    });
    var submitPhone = function(self) {
      var parent = self.parent();
      $.post('https://api.godelegateit.com/sms/sendgreeting/' +
          encodeURIComponent(parent.find(".phone").intlTelInput("getNumber")))
        .always(function() {
          parent.fadeOut(500);
          var infoText = self.parents(".phone-wrapper").find(".phone-info");
          infoText.fadeOut(500, function() {
            infoText.text("Thank you for choosing DelegateIt as your travel assistant!").fadeIn(500);
          });
        });
    };
    // initialise plugin
    telInput.intlTelInput({
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.8/js/utils.js"
    });
    var reset = function(input, action) {
      input.removeClass("error");
      input.removeClass("valid");
      input.removeClass("invalid");
      action.addClass("hidden");
    };
    var validate = function(input, action) {
      if ($.trim(input.val())) {
        if (input.intlTelInput("isValidNumber")) {
          input.addClass("valid");
          action.removeClass("hidden");
        } else {
          input.addClass("invalid");
        }
      }
    };
    // on blur: validate
    telInput.blur(function() {
      var action = $(this).parent().next(".phone-action");
      reset($(this), action);
      validate($(this), action);
    });
    // on keyup / change flag: reset
    telInput.on("keyup change", function(e) {
      var action = $(this).parent().next(".phone-action");
      reset($(this), action);
      validate($(this), action);
    });

  });
})(jQuery);
