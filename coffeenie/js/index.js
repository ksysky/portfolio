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
	$(".m_back").addClass("on");
});

$(".nav_close").click(function(e){
	e.preventDefault();
	$(".m_nav").removeClass("on");
	$(".m_back").removeClass("on");
});

// 반응형 모바일 메뉴 액티브
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

// 모바일 메뉴 검은색 뒷 배경 터치시 메뉴 닫기
$(".m_back").click(function(e){
	e.preventDefault();
	$(".m_nav").removeClass("on");
	$(".m_back").removeClass("on");
});

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
	autoplaySpeed: 2500,
	dots: true,
	touchMove: true,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3
		  }
		},
		{
			breakpoint: 720,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		}
	]	
});

// 커피니 창업 부분 텍스트 애니
$(window).scroll(function(){
	const wTop = $(this).scrollTop();
	
	if (wTop >= $(".coffeenie_info").offset().top - $(window).height()/1){
        $(".info_text").addClass("show");
    }
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
	arrows: false,
	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		  }
		},
		{
			breakpoint: 720,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			}
		}
	]
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