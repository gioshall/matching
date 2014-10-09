// height width

var wHeight = $(window).height();
var wWidth = $(window).width();
$('.main-block').css('height', wHeight);
if ( (wHeight / wWidth) < (9/16) ) {
	$('.main-block video').css('width','100%')
} else {
	$('.main-block video').css('height','100%')
};

$( window ).resize(function() {
	$('.main-block video').attr('style','')
	$('.main-block').css('height', $(window).height());
	if ( ($(window).height() / $(window).width()) < (9/16) ) {
	  $('.main-block video').css('width','100%')
	} else {
	  $('.main-block video').css('height','100%')
	};
});

// random hands

var rdmA = Math.floor(Math.random()*(7-0));
var rdmB = Math.floor(Math.random()*(7-0));

$('.section-story01 .ip-w .hand' + rdmA).show();
$('.section-story01 .ip-b .hand' + rdmB).show();

// scroll

$( window ).scroll(function(){
	if ( $(window).scrollTop() > $(window).height()) {
	$('.main-block .logo').fadeOut(200);
    } else {
    $('.main-block .logo').fadeIn(1000)	
    };
    if ( $(window).scrollTop() > $(window).height() / 2) {
    $('.ip-w').css('margin-left', $(window).scrollTop() / 3+'px');
    $('.ip-b').css('margin-right', $(window).scrollTop() / 3+'px')
    }
});

// DUI

$('.btn-y').mousedown(function(){
$('.dui-y').css('bottom','229px');
});
$('.btn-x').mousedown(function(){
$('.dui-b').css('right','115px');
});
$('.btn-b').mousedown(function(){
$('.dui-r').css('right','-860px');
});
$('.btn-a').mousedown(function(){
$('.dui-g').css('bottom','-800px');
});

$('.dui-02 li').mouseup(function(){
$('.section-story02 img').attr('style','');
});

//game

$('.game-cover .bs').mouseover(function(){
    $('.game-bs').css('opacity','1')
});
$('.game-cover .lgbm').mouseover(function(){
    $('.game-bm').css('opacity','1')
});
$('.game-cover .lghp').mouseover(function(){
    $('.game-hp').css('opacity','1')
});


// slideshow

function slideSwitch() {
    var $active = $('.section-story03 .game-cover li.active');
    var $next =  $active.next().length ? $active.next()
        : $('.section-story03 .game-cover li:first');
    $active.removeClass('active')
    $next.addClass('active')
}

$(function() {
    setInterval( "slideSwitch()", 3000 );
});