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

    // Testimonials
    var testimonials = [{
      text: "I had tacos delivered from Torchy's in 20 minutes. They even let me know about their awesome secret menu.",
      name: "James B.",
      image: "/images/testimonials-0.jpg"
    }, {
      text: "I was eccstatic when DelegateIt got me a last minute reservation at Uchi!",
      name: "Macy M.",
      image: "/images/testimonials-1.jpg"
    }, {
      text: "DelegateIt booked a paddleboarding trip for us and even called a car to come take us there.",
      name: "Alexa S.",
      image: "/images/testimonials-2.jpg"
    }];

    testimonial_selected = false;
    testimonial_idx = -1;

    var getTestimonial = function(idx) {
      return testimonials[idx];
    };

    var setTestimonial = function(testimonial_idx) {
      var testimonial = getTestimonial(testimonial_idx);
      $('.testimonial-image').fadeOut(1000, function () {
        $('.testimonial-selector div i').removeClass('active');
        $(this).attr('src', testimonial.image);
        $(this).fadeIn(1000);
      });
      $('.testimonial-text').fadeOut(1000, function () {
        $(this).text(testimonial.text);
        $(this).fadeIn(1000);
        $('.testimonial-selector-'+testimonial_idx).addClass('active');
      });
      $('.testimonial-name').fadeOut(1000, function () {
        $(this).text('- ' + testimonial.name);
        $(this).fadeIn(1000);
      });
    };

    var chooseTestimonial = function() {
      if (testimonial_selected === false) {
        testimonial_idx = ++testimonial_idx % 3;
        setTestimonial(testimonial_idx);
      } else {
        if (testimonial_idx !== testimonial_selected) {
          testimonial_idx = testimonial_selected;
          setTestimonial(testimonial_selected);
        }
      }
    };

    $('.testimonial-selector div i').on('click', function() {
      window.testimonial_selected = Number($.grep(this.className.split(' '), function(v, i) {
        return v.indexOf('testimonial-selector-') === 0;
      })[0].substring(21));
      chooseTestimonial();
    });
    setInterval(chooseTestimonial, 8000);
    $('.testimonial-image').hide();
    chooseTestimonial();

  });
})(jQuery);
