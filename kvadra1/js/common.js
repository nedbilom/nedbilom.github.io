// Mobily menu
$('#menu_button').click(function(){
    $('#my-menu').mmenu(
        {
        extensions: ['widescreen', 'effect-menu-slide', 'pagedim-black', 'border-full'],
        navbar: {
            title: 'Меню'
        },
    });
    let api = $('#my-menu').data('mmenu');
    api.bind('opened', function() {
        $('.mobile-navigation').removeClass('not-active');
        $('.hamburger').addClass('is-active');
    }).bind('closed', function() {
        $('.hamburger').removeClass('is-active');
    }
    )
  });

//E-mail Ajax Send
$("form.feedback").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
        $(th).find('.feedback_success').addClass('feedback_success_active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			// Done Functions
            $(th).find('.feedback_success').removeClass('feedback_success_active').fadeOut();
            th.trigger("reset");
	    }, 3000);
	});
	return false;
});

//Bottom Form E-mail Ajax Send
	$("form.feedback_bottom").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $(th).find('.feedback_bottom_success').addClass('feedback_bottom_success_active').css('display', 'flex').hide().fadeIn();
            setTimeout(function() {
                // Done Functions
                $(th).find('.feedback_bottom_success').removeClass('feedback_bottom_success_active').fadeOut();
                th.trigger("reset");
            }, 3000);
		});
		return false;
	});