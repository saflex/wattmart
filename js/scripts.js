window.onload = function() {
    $('.s-items2').css('opacity', '1');
    $('.mobile-main-accordion').css('opacity', '1');
    $('.slider-product').css('opacity', '1');
}

$(function() {

    $('.sc1').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc1').offset().top }, 700);
        e.preventDefault();
    });

    $(function() {
        inputmask_initialization()
    });

});







$(function() {

    $('.sc2').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc2').offset().top }, 700);
        e.preventDefault();
    });

});
$(function() {

    $('.sc3').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc3').offset().top }, 700);
        e.preventDefault();
    });

});
$(function() {

    $('.sc4').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc4').offset().top }, 700);
        e.preventDefault();
    });

});


$(function() {

    $('.sc5').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc5').offset().top }, 700);
        e.preventDefault();
    });

});
$(function() {

    $('.sc6').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc6').offset().top }, 700);
        e.preventDefault();
    });

});
$(function() {

    $('.sc7').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $('#sc7').offset().top }, 700);
        e.preventDefault();
    });

});
$(function() {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
    });
});


$(function() {
    $("#accordion-kabinet").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false,
    });
});



if ($(window).width() > 991) {


    function inputmask_initialization() {
        var listCountries = $.masksSort($.masksLoad("http://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
        var listRU = $.masksSort($.masksLoad("http://cdn.rawgit.com/andr-04/inputmask-multi/master/data/phones-ru.json"), ['#'], /[0-9]|#/, "mask");
        var maskOpts = {
            inputmask: {
                definitions: {
                    '#': {
                        validator: "[0-9]",
                        cardinality: 1
                    }
                },
                showMaskOnHover: false,
                autoUnmask: true,
                clearMaskOnLostFocus: false
            },
            match: /[0-9]/,
            replace: '#',
            listKey: "mask"
        };

        var maskChangeRU = function(maskObj, determined) {
            if (determined) {
                if (maskObj.type != "mobile") {
                    $("#descr").html(maskObj.city.toString() + " (" + maskObj.region.toString() + ")");
                } else {
                    $("#descr").html("мобильные");
                }
            } else {
                $("#descr").html("");
            }
        }
        $('.customer_phone').inputmasks($.extend(true, {}, maskOpts, {
            list: listRU,
            onMaskChange: maskChangeRU
        }));
        $('#phone_mask').change();


    };

} else {
    // change functionality for larger screens
};


$(function() {
    $('.lbl2').on('click', function(e) {
        $('.tx-area2').css('display', 'block');
        $('.tx-area1').css('display', 'none');
        $('.tx-area3').css('display', 'none');
        $('.tx-area4').css('display', 'none');
    });
});

$(function() {
    $('.lbl3').on('click', function(e) {
        $('.tx-area3').css('display', 'block');
        $('.tx-area1').css('display', 'none');
        $('.tx-area2').css('display', 'none');
        $('.tx-area4').css('display', 'none');
    });
});


$(function() {
    $('.lbl1').on('click', function(e) {
        $('.tx-area1').css('display', 'block');
        $('.tx-area2').css('display', 'none');
        $('.tx-area3').css('display', 'none');
        $('.tx-area4').css('display', 'none');
    });
});




$(function() {
    $('.lbl4').on('click', function(e) {
        $('.tx-area4').css('display', 'block');
        $('.tx-area1').css('display', 'none');
        $('.tx-area3').css('display', 'none');
        $('.tx-area2').css('display', 'none');
    });
});

$(function() {
    $('#add-phone1').on('click', function(e) {
        $('.hide-inp').css('display', 'block');
        $('#add-phone1').css('display', 'none');
    });
});


$(function() {
    $('#no-show-bt').on('click', function(e) {
        $('.hide-inp').css('display', 'none');
        $('#add-phone1').css('display', 'block');
    });
});



$(function() {
    $('#add-phone2').on('click', function(e) {
        $('.hide-inp2').css('display', 'block');
        $('#add-phone2').css('display', 'none');
    });
});



$(function() {
    $('#no-show-bt2').on('click', function(e) {
        $('.hide-inp2').css('display', 'none');
        $('#add-phone2').css('display', 'block');
    });
});



$(function() {
    $('#close1').on('click', function(e) {
        $('#tr1').css('display', 'none');
    });
});

$(function() {
    $('#close2').on('click', function(e) {
        $('#tr2').css('display', 'none');
    });
});

$(function() {
    $('#close3').on('click', function(e) {
        $('#tr3').css('display', 'none');
    });
});

$(function() {
    $('#close-item-1').on('click', function(e) {
        $('#tel-item-1').css('display', 'none');
    });
});

$(function() {
    $('#close-item-2').on('click', function(e) {
        $('#tel-item-2').css('display', 'none');
    });
});



$(function() {
    $('#close-item-2').on('click', function(e) {
        $('#tel-item-2').css('display', 'none');
    });
});


$(function() {
    $('#close-add-1').on('click', function(e) {
        $('#add-item-1').css('display', 'none');
    });
});

$(function() {
    $('#close-add-2').on('click', function(e) {
        $('#add-item-2').css('display', 'none');
    });
});

$(function() {
    $('.show-filtr').on('click', function(e) {
        $('.filtr-desctop.fll').css('display', 'block');
        $('.show-filtr').css('display', 'none');
    });
});



if ($(window).width() > 1200) {

    $(function() {
        $(".nav-menu-top .dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
            });
    });


    $(function() {
        $(".footer-menu .dropdown").hover(
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
                $(this).toggleClass('open');
            },
            function() {
                $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
                $(this).toggleClass('open');
            });
    });

} else {
    // change functionality for larger screens
}






$(function() {
    $('.dotted-sr').on('click', function(e) {
        $('.card-tovar').removeClass('full-size-cart');
        $('.dotted-sr').addClass('active');
        $('.line-sr').removeClass('active');
        $('.full-size-tv').removeClass('active');


    });
});


$(function() {
    $('.all-types').on('click', function(e) {
        $('.no-show-lts').css('display', 'block');
        $('.all-types').css('display', 'none');
    });
});


$(function() {
    $('.line-sr').on('click', function(e) {
        $('.card-tovar').addClass('full-size-cart');
        $('.line-sr').addClass('active');
        $('.dotted-sr').removeClass('active');
        $('.full-size-tv').addClass('active');
    });
});


$(function() {
    $('.more-spv1').on('click', function(e) {
        $('.hidden-more-spv1').css('display', 'block');
        $('.more-spv1').css('display', 'none');
    });
});



$(function() {
    $('.my-passw').on('click', function(e) {
        $('.block-2-t').css('display', 'block');
        $('.block-3-t').css('display', 'none');
        $('.block-1-t').css('display', 'none');
    });
});

$(function() {
    $('.ents2s').on('click', function(e) {
        $('.block-3-t').css('display', 'block');
        $('.block-2-t').css('display', 'none');
        $('.block-1-t').css('display', 'none');
    });
});

$(function() {
    $('.i-regs').on('click', function(e) {
        $('.block-1-t').css('display', 'block');
        $('.block-2-t').css('display', 'none');
        $('.block-3-t').css('display', 'none');
    });
});
$(function() {
    $('.my-passw2').on('click', function(e) {
        $('.block-1-t').css('display', 'block');
        $('.block-2-t').css('display', 'none');
        $('.block-3-t').css('display', 'none');
    });
});


$(function() {
    $('.card-tovar > img').click(function() {
        window.location = 'http://saflex.ru/wattmart/product.html'
    });
});

$(function() {
    $('.card-tovar a + img').click(function() {
        window.location = 'http://saflex.ru/wattmart/product.html'
    });
});

$(function() {
    $('.card-tovar .title-full').click(function() {
        window.location = 'http://saflex.ru/wattmart/product.html'
    });
});

$(function() {
    $('.card-tovar h4').click(function() {
        window.location = 'http://saflex.ru/wattmart/product.html'
    });
});



$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    var target = this.href.split('#');
    $('.nav a').filter('a[href="#' + target[1] + '"]').tab('show');
});



(function($) {
    $(function() {
        $('input, select').styler({
            selectSearch: true
        });
    });
})(jQuery);

// mobile menu

jQuery('.click-yes2').click(function() {
    jQuery('.no-show-2').slideToggle('');
    jQuery('.click-yes2').toggleClass("str-full");
});


$(document).ready(function() {
    $('nav#menu').addClass('minimize-menull');
})


jQuery('.click-yes').click(function() {
    jQuery('.no-show-padd').slideToggle('');
    jQuery('.click-yes').toggleClass("str-full");
});


$(function() {
    $('nav#menu').mmenu();
});


$('input.form-control').click(function(e) {
    e.stopPropagation();
});



$(function() {
    $(".datepicker").datepicker({
        numberOfMonths: 3,
        showButtonPanel: true
    });
});

jQuery('.acive-block').click(function() {
    jQuery('.close-block').slideToggle('');
});


jQuery('.search-menu').click(function() {
    jQuery('.search-area').slideToggle('');
});




var $nav_list = $('.tabs'),
    $nav_tab = $nav_list.children('.tab'),
    $back_tab = $('.tab-back'),
    $more_tab = $('.tab-more'),
    $sections = $('.slides'),
    tab_list_length = $nav_tab.length,
    tab_width = $nav_tab.eq(0).outerWidth(),
    list_width = $nav_list.innerWidth(),
    tabs_displayed = parseInt((list_width / tab_width), 10),
    pos_counter = 0;

// configure the slider
$sections.slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    speed: 1000,
    infinite: false,

    // set the height of the slide display based on the currently displayed slide when the slider is initialized
    onInit: function() {
        startingSlideHeight = $('.slick-active').outerHeight();
        $sections.css({
            'height': startingSlideHeight + 'px',
            'overflow': 'hidden'
        });
    },

    // when navigating via the slider, keep the active section's tab in view in the tab display
    onBeforeChange: function(slick, currentSlide, targetSlide) {
        //round tabs_displayed to nearest whole number to ensure logic is correct after resizing
        var tabs_rounded = Math.round(tabs_displayed);

        // trigger a rightward animation of tabs
        if ((targetSlide - pos_counter) / (tabs_rounded - 1) >= 1 && targetSlide < (tab_list_length - 1)) {
            var modulus = ((targetSlide - pos_counter) % (tabs_rounded)) + 1;
            var integer = Math.floor((targetSlide - pos_counter) / tabs_rounded);
            var tab_animation_distance = (((integer - 1) * tabs_rounded) + modulus + 1) * tab_width;
            $nav_tab.each(function() {
                $(this).animate({
                    left: '-=' + tab_animation_distance
                }, 300);
            });
            pos_counter += (((integer - 1) * tabs_rounded) + modulus + 1);
            if (pos_counter < tab_list_length - tabs_rounded) {
                $more_tab.css('right', '0px');
            } else {
                $more_tab.css('right', '1999px');
            }
            if (pos_counter > 0) {
                $back_tab.css('left', '0px');
            }
        } else {
            // behavior for tabs if sliding to last panel while tab view is offset some distance to the left
            if ((targetSlide - pos_counter) / (tabs_rounded - 1) >= 1 && targetSlide === (tab_list_length - 1)) {
                var last_pos = tab_list_length - tabs_rounded;
                $nav_tab.each(function() {
                    var index = $(this).index();
                    $(this).animate({
                        left: ((index - last_pos) * tab_width) + 'px'
                    }, 300);
                });
                $more_tab.css('right', '1999px');
                $back_tab.css('left', '0px');
                pos_counter = last_pos;
            }
        }

        // trigger a leftward animation of tabs
        if (targetSlide / pos_counter <= 1 && targetSlide > 0) {
            var distance_multiplier = (pos_counter - targetSlide) + 1;
            var tab_animation_distance = distance_multiplier * tab_width;
            $nav_tab.each(function() {
                $(this).animate({
                    left: '+=' + tab_animation_distance
                }, 300);
            });
            pos_counter -= distance_multiplier;
            if (pos_counter > 0) {
                $back_tab.css('left', '0px');
            } else {
                $back_tab.css('left', '-1999px');
            }
            if (pos_counter < tab_list_length - tabs_rounded) {
                $more_tab.css('right', '0px');
            }
        } else {
            // behavior for tabs if sliding to first panel while tab view is offset some distance to the right
            if (targetSlide / pos_counter <= 1 && targetSlide === 0) {
                $nav_tab.each(function() {
                    var index = $(this).index();
                    $(this).animate({
                        left: (index * tab_width) + 'px'
                    }, 300);
                });
                $more_tab.css('right', '0px');
                $back_tab.css('left', '-1999px');
                pos_counter = 0;
            }
        }
    },

    // after sliding, fix the height of the display to that of the currently displayed slide
    // update the active tab
    onAfterChange: function() {
        var index = $sections.slickCurrentSlide(),
            this_sectionHeight = $('.slick-active').outerHeight();
        $nav_tab.removeClass('active');
        $nav_tab.eq(index).addClass('active');
        $sections.animate({
            height: this_sectionHeight + 'px'
        });
    }
});

$nav_tab.each(function() {
    var index = $(this).index();
    var left_pos = (tab_width * index) + 'px';
    $(this).css('left', left_pos);
});

//on click on more or back tabs, list animates right or left, more and back tab appearance determined by counter value
$more_tab.click(function() {
    $nav_tab.each(function() {
        $(this).animate({
            left: '-=' + tab_width
        }, 300);
    });
    pos_counter++;
    if (pos_counter < tab_list_length - tabs_displayed) {
        $more_tab.css('right', '0px');
    } else {
        $more_tab.css('right', '1999px');
    }
    if (pos_counter > 0) {
        $back_tab.css('left', '0px');
    }
});
$back_tab.click(function() {
    $nav_tab.each(function() {
        $(this).animate({
            left: '+=' + tab_width
        }, 300);
    });
    pos_counter--;
    if (pos_counter > 0) {
        $back_tab.css('left', '0px');
    } else {
        $back_tab.css('left', '-1999px');
    }
    if (pos_counter < tab_list_length - tabs_displayed) {
        $more_tab.css('right', '0px');
    }
});

//clicking on a nav_tab gives it the active class, slides slider to the corresponding section
$nav_tab.click(function() {
    $nav_tab.removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $sections.slickGoTo(parseInt(index));
});

// remeasure an li and tab width for spacing, re-measure num of tabs displayed
function set_sizes() {
    tab_width = $nav_tab.outerWidth();
    list_width = $nav_list.outerWidth();
    tabs_displayed = list_width / tab_width;
    //recalculate height of the currently displayed slide
    var this_sectionHeight = $('.slick-active').outerHeight();
    $sections.css('height', this_sectionHeight + 'px');
    //use tab width and tab index to set horizontal spacing
    $nav_tab.each(function() {
        var index = $(this).index();
        var left_pos = (tab_width * (index - pos_counter)) + 'px';
        $(this).css('left', left_pos);
    });
}

// trigger set_sizes on page resize
var resizeTimer;
$(window).resize(function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(set_sizes, 15);
});

// accordion jq-ui
$(function() {
    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});

$(function() {
    $('.switcher').click(function() {
        $('.switcher').toggleClass("sw-active");
        $('.filtr-area').toggleClass('no-screen');
    });
});


$(document).ready(function() {

    //main nav
    $(window).on('scroll load', function() {
        updateMainNav();
    });

    function updateMainNav() {
        if ($(window).scrollTop() >= 1) {
            $('body').addClass('minimize-menu');
        } else {
            $('body').removeClass('minimize-menu');
        }
    }

    $('.user-nav > a').on('click', function() {
        $('body').toggleClass('show-user-nav');
    });

    $(document).on('click', function(event) {
        $('body').removeClass('show-user-nav');
    });

    $('.collapse-main-nav').on('click', function() {
        if ($('body').toggleClass('show-main-nav').hasClass('show-main-nav')) window.scrollTo(0, 0);
        return false;
    });

});







// placeholder-focus
$(document).ready(function() {
    $('input,textarea').focus(function() {
        $(this).data('placeholder', $(this).attr('placeholder'))
        $(this).attr('placeholder', '');
    });
    $('input,textarea').blur(function() {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});



// slick-slider
$(document).ready(function() {



    $('.s-items').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-navs'
    });
    $('.slider-navs').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.s-items',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });






    jQuery(document).ready(function() {
        if (jQuery(window).width() > 991) {

            $('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                vertical: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: false,

                focusOnSelect: true
            });

        }
    });





    if ($(window).width() < 992) {

        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            vertical: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            focusOnSelect: true,

            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                }, {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },

                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });



    } else {
        // change functionality for larger screens
    }


    $('.s-items2').slick({
        infinite: true,
        speed: 500,

        dots: true,

        arrows: true,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    if ($(window).width() > 767) {
        jQuery('ul.nav > li').hover(function() {
            jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).show();
        }, function() {
            jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).hide();
        })
    } else {
        // change functionality for larger screens
    }





    $('.sldsas-st2').slick({
        infinite: true,
        speed: 500,

        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.sldsas').slick({
        infinite: true,
        speed: 500,

        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 431,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.sldsas2').slick({
        infinite: true,
        speed: 500,

        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });




    $('.slds2').slick({
        infinite: true,
        speed: 500,

        dots: false,

        arrows: true,
        autoplay: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.slds').slick({
        infinite: true,
        speed: 500,

        dots: false,

        arrows: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.single-item').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

});

// zoom off mobile 
document.documentElement.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);



// custom-forms 
(function($) {
    $(function() {
        $('.form-control, .form-controls, select, input[type="checkbox"]').styler({
            selectSearch: true
        });
    });
})(jQuery);



//
$(function() {
    $(".tool").tooltip({
        position: {
            my: "center bottom-20",
            at: "center top",
            using: function(position, feedback) {
                $(this).css(position);
                $("<div>")
                    .addClass("arrow")
                    .addClass(feedback.vertical)
                    .addClass(feedback.horizontal)
                    .appendTo(this);
            }
        }
    });
});






$(".scroller-b").mCustomScrollbar({
    axis: "y",
    autoDraggerLength: false,

});




/**
 * Vertically center Bootstrap 3 modals so they aren't always stuck at the top
 */
$(function() {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
        $('.modal:visible').each(reposition);
    });
});

// $('.menu-area-ul > li > a').on('click',function(e){
//       e.preventDefault();
//    });



var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    speed: 800,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});



$(window).trigger("resize");
$('.nav-tabs').slick("setPosition");