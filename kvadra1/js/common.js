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