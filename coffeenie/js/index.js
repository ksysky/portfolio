// 메뉴
$(".nav ul").mouseover(function(){
	$(".nav > ul ul").stop().slideDown(200);
	$(".menuback").stop().slideDown(200);
});

$(".nav ul").mouseout(function(){
	$(".nav > ul ul").stop().slideUp(200);
	$(".menuback").stop().slideUp(200);
});

// 반응형 메뉴
// $(".nav_btn").click(function(){
// 	$(".header .header_nav").toggleClass("on");
// 	$(".m_nav").toggleClass("on");
// 	$(".nav_close").css("display", "block");
// 	$(".m_nav.on").css("display", "block");
// });

// $(".nav_close").click(function(){
// 	$(".m_nav").css("display", "none");
// 	$(".header .header_nav").removeClass("on");
// 	$(".m_nav").removeClass("on");
// });



//$(".m_nav.on .nav ul li").click(function(){
//	$(".nav > ul ul").slideToggle();
//	$(".menuback").slideToggle();
//});


// 이미지 슬라이드
//$(".banner > .side-bars > div").click(function(){
//    var $clickedBtn = $(this);
//    
//    var $slider = $clickedBtn.closest('.banner');
//    
//    var isLeft = $clickedBtn.index() == 0;
//    
//    var $present = $slider.find('.slides > .active');
//    
//    var $post = null;
//    
//    if(isLeft) {
//        $post = $present.prev();
//    }
//    else {
//        $post = $present.next();
//    }
//    
//    if ( $post.length == 0 ) {
//        if(isLeft) {
//            $post = $slider.find('.slides > div:last-child');    
//        }
//        else {
//            $post = $slider.find('.slides > div:first-child');   
//        }
//    }
//    
//    $present.removeClass('active');
//    $post.addClass('active');
//});

// 슬릭 배너 이미지 슬라이드
$('.slides').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
});

// 슬릭 신메뉴 슬라이드
$('.new_slide').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2500
});

// 슬릭 MD 상품 슬라이드
$(".md_slide").slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2500,
	speed: 2500,
	dots: true,
	arrows: false
});

$(".play").click(function(){
    $(".md_slide").slick("slickPlay");
	$(".pause").css("display", "block");
	$(".play").css("display", "none");
});

$(".pause").click(function(){
    $(".md_slide").slick("slickPause");
	$(".play").css("display", "block");
	$(".pause").css("display", "none");
});

// top 버튼
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 130) {
            $('.top_btn').css("display", "block");           
//            $('.top_btn').css('right', $('#banner').offset().left);
        } else {
            $('.top_btn').css("display", "none");
        }
    });
    
    $(".top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});