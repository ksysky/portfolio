// 헤더 스크롤 효과
$(function () {
	var logo_nav = $(".logo_nav").offset().top;
	
	$(window).scroll(function(){
		var window = $(this).scrollTop();
		
		if (logo_nav <= window) {
			$(".logo_nav").addClass("fixed");
			$(".header_nav").addClass("none");
		} else {
			$(".logo_nav").removeClass("fixed");
			$(".header_nav").removeClass("none");
		}
	})
});

// 탑 헤더 언어설정 효과
$(".lang > .btn").click(function (e) {
	e.preventDefault();

	$(this).toggleClass("on");
	$(".lang_select").toggle();
});


// 서브 메뉴 효과
$(".nav > ul > li").mouseenter(function () {
	$(this).find("> ul").show();
});

$(".nav > ul > li").mouseleave(function () {
	$(this).find("> ul").hide();
});


// 서치박스 나타내기
$(".search_area > input").click(function (e) {
	e.preventDefault();

	$(".search_pop").css("display", "block");
});


// 서치박스 닫기
$(".search_area > .close_icon").click(function (e) {
	e.preventDefault();

	$(".search_pop").css("display", "none");
});


// 슬릭 슬라이더
$(function () {
	$('.slider').on('init', function (event, slick) {
			$(this).append('<div class="slick_counter"><span class="current"></span> / <span class="total"></span></div>');
			$('.current').text(slick.currentSlide + 1);
			$('.total').text(slick.slideCount);
		})

		.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
		})

		.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
			$('.current').text(nextSlide + 1);
		});
});


// 리얼 리뷰 팝업창
$(".click_1").click(function (e) {
	e.preventDefault();
	$(".popup_1").css("display", "block");
	$(".popup_1").css("overflow-y", "auto");
	$("body").css("overflow-y", "hidden");
});


$(".close_1").click(function (e) {
	e.preventDefault();
	$(".popup_1").css("display", "none");
	$(".popup_1").css("overflow-y", "hidden");
	$("body").css("overflow-y", "auto");
});


// 룩북 팝업
$(".box2 .pop_box_1").mouseover(function () {
	$(".pop1").css("display", "block");
	$(".b1").addClass("on");
});

$(".box2 .pop_box_1").mouseleave(function () {
	$(".pop1").css("display", "none");
	$(".b1").removeClass("on");
});

$(".box2 .pop_box_2").mouseover(function () {
	$(".pop2").css("display", "block");
	$(".b2").addClass("on");
});

$(".box2 .pop_box_2").mouseleave(function () {
	$(".pop2").css("display", "none");
	$(".b2").removeClass("on");
});


// 푸터 공지사항 세로슬라이드
$(".notice_slides").slick({
	autoplay: true,
	autoplaySpeed: 2500,
	swipe: false,
	dots: false,
	arrows: false,
	vertical: true,
	pauseOnHover: true
});


// 오른쪽 top 버튼 스크롤
$(window).scroll(function(){
	if ( $(this).scrollTop() > 1000 ) {
		$("#btn_top").show();
	} else {
		$("#btn_top").hide();
	}
});


$("#btn_top").click(function(){
	$("html,body").animate({scrollTop: 0}, 400);
	return false;
});


$(function() {

  var $w = $(window),
    footerHei = $('#footer').outerHeight(),
    $btn_top = $('#btn_top');

  $w.on('scroll', function() {

    var sT = $w.scrollTop();
    var val = $(document).height() - $w.height() - footerHei;

    if (sT >= val)
        $btn_top.addClass('on')
    else
    	$btn_top.removeClass('on')
    


  });


});