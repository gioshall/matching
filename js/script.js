// device

$(document).ready(function(){
var device = navigator.userAgent.toLowerCase();
var mobile = device.match(/(iphone|ipod|ipad|android)/);
if (mobile) {
     $('.main-block.fixed,.main-block.bottom-block').addClass('mobile');
     $('video').remove();
     }
});

// height width

var wHeight = $(window).height();
var wWidth = $(window).width();
$('.main-block').css('height', wHeight);
if ( (wHeight / wWidth) < (9/16) ) {
	$('.main-block video').css('width','100%');
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

var rdmA = Math.floor(Math.random()*(9-0));
var rdmB = Math.floor(Math.random()*(9-0));

if ( rdmA != rdmB ) {
    $('.section-story01 .ip-w .hand' + rdmA).show();
    $('.section-story01 .ip-b .hand' + rdmB).show();
} else {
    $('.section-story01 .ip-w .hand' + rdmA).show();
    if ( rdmA > 0 ) {
        $('.section-story01 .ip-b .hand' + (rdmB-1) ).show();
    } else {
        $('.section-story01 .ip-b .hand' + (rdmB+1) ).show();
    }    
}



// scroll

$( window ).scroll(function(){
	if ( $(window).scrollTop() > $(window).height()) {
	$('.main-block .logo').fadeOut(200);
    } else {
    $('.main-block .logo').fadeIn(1000)	
    };
    if ( $(window).scrollTop() > $(window).height() / 1.7) {
    $('.ip-w').css('margin-left', $(window).scrollTop() / -3+'px');
    $('.ip-b').css('margin-right', $(window).scrollTop() / -3+'px')
    }
});

// DUI

$( '.anlg-act' ).mousemove(function( event ) {
    $('.anlg-btn').css({'margin-left' : event.clientX -397 , 'margin-top' : event.clientY -397 })
});

$( '.anlg-act' ).mouseout(function() {
    $('.anlg-btn').attr('style','transition:0.3s')
});
$( '.anlg-act' ).mouseover(function() {
    $('.anlg-btn').attr('style','transition:0')
});

$('.btn-y').mousedown(function(){
$('.dui-y').css({'bottom':'229px','opacity':'1'});
});
$('.btn-x').mousedown(function(){
$('.dui-b').css({'right':'115px','opacity':'1'});
});
$('.btn-b').mousedown(function(){
$('.dui-r').css({'right':'-860px','opacity':'1'});
});
$('.btn-a').mousedown(function(){
$('.dui-g').css({'bottom':'-800px','opacity':'1'});
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
    var $active = $('.section-story03 .game-cover-new li.active');
    var $next =  $active.next().length ? $active.next()
        : $('.section-story03 .game-cover-new li:first');
    $active.removeClass('active')
    $next.addClass('active')
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});