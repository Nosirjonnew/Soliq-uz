startSpin = function() {
    $(".preloader").fadeIn("500");
};
stopSpin = function() {
    $(".preloader").fadeOut("500");
};
$(document).ready(function() {
    var loader = $('<div class="preloader"></div>');
    loader.prependTo($('body'));
    startSpin();
    setTimeout(function() {
        $(".preloader").fadeOut("500");
    }, 5000);
});
$(window).load(function() {
    $(".preloader").fadeOut("500");
});

$(document).ready(function() {
    $('input[type="radio"]').on('change', function() {
        var $radioWrap = $(this).closest('.radio-wrap');
        $radioWrap.find($('input[type="radio"]')).removeClass('checked');
        $(this).addClass('checked');
    })

});
$(document).ready(function() {
    /*------------  bootstrap  js  -------------*/

    $('#tabs a').click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });
//    $('.blink').modernBlink({
//        duration: 2500,
//        iterationCount: "infinite",
//        auto: true
//    });
//    $('.blink-fast').modernBlink({
//        duration: 1500,
//        iterationCount: "infinite",
//        auto: true
//    });

//    $(".datepicker").datepicker({
//        format: "dd.mm.yyyy",
//        autoclose: true,
//        todayHighlight: true
//    }).datepicker('update', new Date());

//    $('.spinner').bootstrapNumber({
//        upClass: 'default',
//        downClass: 'default'
//    });

    /*------------  end  -----------*/

    /*-------------  toggle navigation for small devices  -----------*/

    $(function() {
        $('.toggle-nav').click(function() {
            toggleNavigation();
        });
    });

    function toggleNavigation() {
        if ($('#main-wrapper').hasClass('display-nav')) {
            // Close Nav
            $('#main-wrapper').removeClass('display-nav');
        } else {
            // Open Nav
            $('#main-wrapper').addClass('display-nav');
        }
    }

    $("#toggle > li > div").click(function() {
        if (false == $(this).next().is(':visible')) {
            $('#toggle ul').slideUp();
        }

        var $currIcon = $(this).find("span.the-btn");

        $("span.the-btn").not($currIcon).addClass('fa-plus').removeClass('fa-minus');

        $currIcon.toggleClass('fa-minus fa-plus');

        $(this).next().slideToggle();

        $("#toggle > li > div").removeClass("active");
        $(this).addClass('active');
    });

    /*-------------  end  -----------*/

    /*-------------  services toggling ( ! Need to rewrite ) ------------*/

    $('#favoriteServices .show-services').click(function(e) {
        e.preventDefault();
        var $this = $(this);
        var $showAll = $('#favoriteServices .btn-showAll');
        var $favoriteServices = $('#favoriteServices');
        var $itemsSection = $('.section-items');
        var $defaultText = $this.find('span').first();
        $this.toggleClass('active');
        if ($this.hasClass('active')) {
            ;
            $defaultText.removeClass('hidden').next().addClass('hidden');
            $showAll.show();
            $favoriteServices.addClass('transformed').find($itemsSection).addClass('normalHeight');
        } else {
            $defaultText.addClass('hidden').next().removeClass('hidden');
            $showAll.fadeOut(100);
            $favoriteServices.removeClass('transformed').find($itemsSection).removeClass('normalHeight fullHeight');
        }
    });
    $('#favoriteServices .show-services').click();
    $('#favoriteServices .btn-showAll').click(function(e) {
        e.preventDefault();
        $('.section-items').addClass('fullHeight');
        $(this).fadeOut(100);
    });

    /*-------------  end  -----------*/

    /*-------------  star-rating  -----------*/

    var $star_rating = $('.star-rating .fa');
    var $overall_rating = $('.rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    var SetOverallRating = function() {
        return $overall_rating.each(function() {
            if (parseInt($overall_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    $('.fa-star-o').hover(function() {
        $(this).filter('.fa-star-o').css('color', '#5a8fbd').prevAll('.fa-star-o').css('color', '#5a8fbd');
    }, function() {
        $(this).filter('.fa-star-o').css('color', '#cccccc').prevAll('.fa-star-o').css('color', '#cccccc');
    });
    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        $(this).css('color', '#5a8fbd').prevAll().css('color', '#5a8fbd');
        return SetRatingStar();
    });


    SetRatingStar();
    SetOverallRating();



    /*-------------  end  -----------*/
//
//    $('.filtering-tabs a').click(function(){
//        $('.filtering-tabs a.active').removeClass('active');
//        $(this).addClass('active');
//    });
    /*-------------  simple tab  -----------*/

    $('.tabs > li > a').click(function(event) {
        event.preventDefault();
        var active_tab_selector = $('.tabs > li > a.active').attr('href');
        var actived_nav = $('.tabs > li a.active');
        actived_nav.removeClass('active');
        $(this).addClass('active');
        $(active_tab_selector).removeClass('active');
        $(active_tab_selector).addClass('hide');
        var target_tab_selector = $(this).attr('href');
        $(target_tab_selector).removeClass('hide');
        $(target_tab_selector).addClass('active');
    });

    /*-------------  end  -----------*/

    $('input[type=file]').change(function(e) {
        $this = $(this);
        $this.closest($('.btn')).next().html($this.val());
    });
});
/*-------------  tree-view  -----------*/

$.fn.extend({
    treed: function(o) {
        var openedClass = '';
        var closedClass = '';

        if (typeof o != 'undefined') {
            if (typeof o.openedClass != 'undefined') {
                openedClass = o.openedClass;
            }
            if (typeof o.closedClass != 'undefined') {
                closedClass = o.closedClass;
            }
        }

        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function() {
            var branch = $(this);
            branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function(e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            });
            branch.children().children().toggle();
        });

        tree.find('.branch .indicator').each(function() {
            $(this).on('click', function() {
                $(this).closest('li').click();
            });
        });

        tree.find('.branch>a').each(function() {
            $(this).on('click', function(e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });

        tree.find('.branch>button').each(function() {
            $(this).on('click', function(e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });

        tree.find('li:not(:has(ul))').prepend("<i class='fa fa-file-text' style='margin-right: 7px'></i>").find(':before').css('display: none;');

    }
});

$('#tree').treed({openedClass: 'glyphicon-folder-open', closedClass: 'glyphicon-folder-close'});

/*-------------  end tree-view -----------*/


function popitup(interactiveId) {
    newwindow = window.open("/feedback/?interactiveId=" + interactiveId, 'name', 'height=700,width=1024');
    if (window.focus) {
        newwindow.focus();
    }
    return false;
}

function printContent() {
    $('.not-print').hide();
    window.print();
    $('.not-print').show();
}

$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});