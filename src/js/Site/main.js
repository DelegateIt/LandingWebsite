$(document).ready(function() {  

  $('body').scrollspy({ target: '#navbar-example' });

	$('input:not(.datepicker), textarea, select').focusin(function() {
		placeHolder = $(this).attr('placeholder');
		$(this).attr('placeholder', '');
	});
	$('input:not(.datepicker), textarea, select').focusout(function() {
		$(this).attr('placeholder', placeHolder);
	});

	$('.delegate-now').click(function(e) {
		e.preventDefault();
		$(window).scrollTo('#delegate-form', 800);
	});

	$('footer .brand').click(function(e) {
		e.preventDefault();
		$(window).scrollTo('#top', 800);
	});

  $('.down-arrow a').click(function(e) {
    e.preventDefault();
    $(window).scrollTo('#second-section', 600, {offset:20});
  });

  $("#phone").mask("(999) 999-9999");
  $("#zip").mask("99999");

  $("#delegate-form form").submit(function(event) {
    event.preventDefault();
    
    var $form = $( this ),
        rawPhoneNumber = $('#phone').val(),
        url = $form.attr( 'action' );

    rawPhoneNumber = rawPhoneNumber.replace(" ", ""); 
    rawPhoneNumber = rawPhoneNumber.replace("(", ""); 
    rawPhoneNumber = rawPhoneNumber.replace(")", ""); 
    rawPhoneNumber = rawPhoneNumber.replace("-", ""); 

    // Phone number validation
    if(rawPhoneNumber === null || rawPhoneNumber === '' || rawPhoneNumber.length !== 10) {
      $('.aqua-box .reduced-width p:nth-child(2)').css('display', 'block');
    } else {
      // var posting = $.post( url, { first_name: $('#first_name').val(), last_name: $('#last_name').val(), phone_number: $('#phone').val(), zip_code: $('#zip').val() } );
      var requestData = { first_name: $('#first_name').val(), last_name: $('#last_name').val(), phone_number: $('#phone').val(), zip_code: $('#zip').val() } ;
      var posting = 
      $.ajax(url, {
        data : JSON.stringify(requestData),
        contentType : 'application/json',
        type : 'POST',
        dataType: 'json'
      });
    }

    posting.done(function( data ) {
      $('.aqua-box form').css('display', 'none');
      $('.aqua-box .reduced-width p:nth-child(2)').css('display', 'none');
      $('.aqua-box .reduced-width p:last-child').css('display', 'block');
      $('.aqua-box .reduced-width').css('margin-bottom', '60px');
    });
  });

  $(window).scroll(_.throttle(function() {
    var scroll = $(window).scrollTop();
    var halfheight = $(window).height() / 2;
    
    if (scroll > $('.message-bubbles').offset().top-halfheight) {
      $('.message-bubbles').children().addClass('animated');
    }

  }, 500));

});  