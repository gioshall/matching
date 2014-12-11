// preload //

$(document).ready( function() {
    var timer;   
    $('body').jpreLoader({
        splashID: "#jSplash",
        loaderVPos: '0%',
        autoClose: true        
    }); 
});

// device

$(document).ready(function(){
var device = navigator.userAgent.toLowerCase();
var mobile = device.match(/(iphone|ipod|ipad|android)/);
if (mobile) {
     $('.main-block.fixed,.main-block.bottom-block').addClass('mobile');
     $('video,.icon-vol').remove();
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

// volume

$('.icon-vol').click( function (){
    $('video').prop('muted', !$('video').prop('muted'));
    $( this ).toggleClass( "mute" );
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
    $('.ip-b').css('margin-right', $(window).scrollTop() / -3+'px');
    }
    if ( $(window).scrollTop() > $(window).height() / 1.6) {
    $('.btn-redeem').addClass('scroll-top');
    } else {
    $('.btn-redeem').removeClass('scroll-top');
    }
});

// DUI

$( '.anlg-act' ).mousemove(function( e ) {
    var x = e.pageX - $(e.target).offset().left;
    var y = e.pageY - $(e.target).offset().top;
    $('.anlg-btn').css({'margin-left' : x -395 , 'margin-top' : y -395 })
});

$( '.anlg-act' ).mouseout(function() {
    $('.anlg-btn').attr('style','transition:0.3s')
});
$( '.anlg-act' ).mouseover(function() {
    $('.anlg-btn').attr('style','transition:0')
});

$('.btn-y').mouseover(function(){
$('.dui-y').css({'bottom':'229px','opacity':'1','z-index':'1'});
});
$('.btn-x').mouseover(function(){
$('.dui-b').css({'right':'115px','opacity':'1','z-index':'1'});
});
$('.btn-b').mouseover(function(){
$('.dui-r').css({'right':'-860px','opacity':'1','z-index':'1'});
});
$('.btn-a').mouseover(function(){
$('.dui-g').css({'bottom':'-800px','opacity':'1','z-index':'1'});
});

$('.dui-02 li').mouseout(function(){
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


$('.dvc').click(function(){
    $('.devices').fadeIn(200);
    $('.dvc-mask').show();
});
$('.devices .close, .dvc-mask').click(function(){
    $('.devices').fadeOut(100);
    $('.dvc-mask').hide()
});

// slideshow

function slideSwitch() {
    var $active = $('.section-story03 .game-cover li.active');
    var $next =  $active.next().length ? $active.next()
        : $('.section-story03 .game-cover li:first');
    $active.removeClass('active')
    $next.addClass('active')
}

function slideSwitchNew() {
    var $active = $('.section-story03 .game-cover-new li.active');
    var $next =  $active.next().length ? $active.next()
        : $('.section-story03 .game-cover-new li:first');
    $active.removeClass('active')
    $next.addClass('active')
}


$(function() {
    setInterval( "slideSwitch()", 5000 );
    setInterval( "slideSwitchNew()", 5000 );
});

$('.game-cover li, .game-cover-new li').mouseover(function(){
    $('.game-cover li, .game-cover-new li').removeClass('active');
    $(this).addClass('active')
});

//wave

function autoupdate() {
  setTimeout(function(){
     $('.wave.w01').show();
     setTimeout(function(){
        $('.wave.w01').hide();
        setTimeout(autoupdate, 0);
     }, 3500)
  }, 3500)
};

function autoupdate2() {
  setTimeout(function(){
     $('.wave.w02').hide();
     setTimeout(function(){
        $('.wave.w02').show();
        setTimeout(autoupdate2, 0);
     }, 3500)
  }, 3500)
};

$(function(){ 
   setTimeout(autoupdate, 0);
});

$(function(){ 
   setTimeout(autoupdate2, 0);
});

//smartbanner

$.smartbanner({
    title: 'GameNow 台灣', // What the title of the app should be in the banner (defaults to <title>)
    author: '優必達', // What the author of the app should be in the banner (defaults to <meta name="author"> or hostname)
    price: '免費', // Price of the app
    appStoreLanguage: 'us', // Language code for App Store
    inAppStore: 'On the App Store', // Text of price for iOS
    inGooglePlay: 'In Google Play', // Text of price for Android
    icon: '/default/img/logo-googleplay.png', // The URL of the icon (defaults to <link>)
    iconGloss: false, // Force gloss effect for iOS even for precomposed (true or false)
    button: '開啟', // Text on the install button
    scale: 'auto', // Scale based on viewport size (set to 1 to disable)
    speedIn: 300, // Show animation speed of the banner
    speedOut: 400, // Close animation speed of the banner
    daysHidden: 0, // Duration to hide the banner after being closed (0 = always show banner)
    daysReminder: 0, // Duration to hide the banner after "VIEW" is clicked (0 = always show banner)
    force: null, // Choose 'ios' or 'android'. Don't do a browser check, just always show this banner
    appendToSelector: '#banner_area',
    layer: true
  })