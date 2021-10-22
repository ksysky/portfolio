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
$(".nav_btn").click(function(e){
	e.preventDefault();
	$(".m_nav").addClass("on");
});

$(".nav_close").click(function(e){
	e.preventDefault();
	$(".m_nav").removeClass("on");
});

// 반응형 모바일 메뉴
$(".m_menu > ul > li").click(function(){
	if ($(this).hasClass("active")) { // class 존재 확인
		$(this).removeClass("active"); // active class를 없앰
		$(this).find("> ul").slideUp(300); // 자식 ul을 찾아 슬라이드 올리기
	} else {
		$(this).addClass("active"); // active class를 생성
		$(this).find("> ul").slideDown(300); // 자식 ul을 찾아 슬라이드 내리기
		$(this).siblings().removeClass("active"); // this의 형제 li을 찾아 active class를 없앰
		$(this).siblings().find("> ul").stop().slideUp(300); // this의 형제 li의 자식 ul은 슬라이드 올리기
	}
});

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
    dots: true,
	slidesToShow: 1,
	touchMove: true,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			arrows: false
		  }
		}
	]	
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