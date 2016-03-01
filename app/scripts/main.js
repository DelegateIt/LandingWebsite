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

        if (scroll > $('.message-bubbles').offset().top - halfheight) {
          $('.message-bubbles').children().addClass('animated');
        }

      }, 500));
    }

    $('.return-to-top').click(function(e) {
      e.preventDefault();
      $(window).scrollTo(0, 500);
    });

    $(window).load(function(){
      var howItWorksHeight = $('.how-it-works-block-wrapper').height() + 60;
      $('.how-it-works-block-wrapper').css('top', -howItWorksHeight);

      $('a.collapse-toggle:not(.dismiss)').click(function(e){
        e.preventDefault();
        $($(this).attr('href')).toggleClass('animated');
        $($(this).attr('href')).removeAttr('style');
        
        if ($($(this).attr('href')).hasClass('animated')) {
          $('.main').css('margin-top', howItWorksHeight);
        } else {
          $('.main').removeAttr('style');
          $($(this).attr('href')).css('top', -howItWorksHeight);
        }
      });

      $('.dismiss').click(function(e){
        e.preventDefault();
        $($(this).attr('href')).removeClass('animated');
        $($(this).attr('href')).css('top', -howItWorksHeight);
        $('.main').removeAttr('style');
      });

      $('.how-it-works-block-wrapper').removeClass('no-opacity');
    });


    // $('input:not(.datepicker), textarea, select').focusin(function() {
    // 	placeHolder = $(this).attr('placeholder');
    // 	$(this).attr('placeholder', '');
    // });
    // $('input:not(.datepicker), textarea, select').focusout(function() {
    // 	$(this).attr('placeholder', placeHolder);
    // });

    // $('.delegate-now').click(function(e) {
    // 	e.preventDefault();
    // 	$(window).scrollTo('#delegate-form', 800);
    // });

    // $('footer .brand').click(function(e) {
    // 	e.preventDefault();
    // 	$(window).scrollTo('#top', 800);
    // });

    // $('.down-arrow a').click(function(e) {
    // 	e.preventDefault();
    // 	$(window).scrollTo('#second-section', 600, {offset:20});
    // });

    // $('#phone').mask('(999) 999-9999');
    // $('#zip').mask('99999');

    // $('#delegate-form form').submit(function(event) {
    // 	event.preventDefault();

    // 	var $form = $( this ),
    // 	rawPhoneNumber = $('#phone').val(),
    // 	url = $form.attr( 'action' );

    // 	rawPhoneNumber = rawPhoneNumber.replace(' ', '');
    // 	rawPhoneNumber = rawPhoneNumber.replace('(', '');
    // 	rawPhoneNumber = rawPhoneNumber.replace(')', '');
    // 	rawPhoneNumber = rawPhoneNumber.replace('-', '');

    //    // Phone number validation
    //    if(rawPhoneNumber === null || rawPhoneNumber === '' || rawPhoneNumber.length !== 10) {
    //    	$('.aqua-box .reduced-width p:nth-child(2)').css('display', 'block');
    //    } else {
    //      // var posting = $.post( url, { first_name: $('#first_name').val(), last_name: $('#last_name').val(), phone_number: $('#phone').val(), zip_code: $('#zip').val() } );
    //      var requestData = { first_name: $('#first_name').val(), last_name: $('#last_name').val(), phone_number: $('#phone').val(), zip_code: $('#zip').val() } ;
    //      var posting =
    //      $.ajax(url, {
    //      	data : JSON.stringify(requestData),
    //      	contentType : 'application/json',
    //      	type : 'POST',
    //      	dataType: 'json'
    //      });
    //    }

    //    posting.done(function( data ) {
    //    	$('.aqua-box form').css('display', 'none');
    //    	$('.aqua-box .reduced-width p:nth-child(2)').css('display', 'none');
    //    	$('.aqua-box .reduced-width p:last-child').css('display', 'block');
    //    	$('.aqua-box .reduced-width').css('margin-bottom', '60px');
    //    });
    //  });

  });
})(jQuery);
