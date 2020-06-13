jQuery(function($) {
    $('.grid img').each(function(i) {
        var src = $(this).attr('src'),
        size = src.split('/').reverse(),
        h = parseInt(size[1]),
        w = parseInt(size[2]),
        flexGrow = (w * 200) / h,
        flexBasis = (w * 280) / h,
        paddingBottom = (h / w) * 100;
        $(this).attr('alt', 'kitten-' + (i + 1))
        .wrap('<figure>').before('<i>');
        
        var figure = $(this).parent('figure');
        figure.css({
            'flex-grow': flexGrow,
            'flex-basis': flexBasis + 'px'
        })
        .find('i').css({
            'padding-bottom': paddingBottom + '%'
        });

        var img = new Image();
        img.onload = function() {
        figure.addClass('loaded');
        };
        img.src = src;
    });
    });