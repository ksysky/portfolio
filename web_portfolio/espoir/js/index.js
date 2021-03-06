// 헤더 스크롤 효과
$(function () {
	var logo_nav = $(".logo_nav").offset().top;

	$(window).scroll(function () {
		var window = $(this).scrollTop();

		if (logo_nav <= window) {
			$(".logo_nav").addClass("fixed");
			$(".nav_back").addClass("up");
			$(".header_nav").addClass("none");
		} else {
			$(".logo_nav").removeClass("fixed");
			$(".nav_back").removeClass("up");
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
$(".logo_nav .nav > ul ul").hide();

$(".nav > ul > li").mouseover(function () {
	$(this).find("> ul").show();
	$(".nav_back").show();
});

$(".event_menu").mouseover(function () {
	$(".nav_back").hide();
});

$(".nav > ul > li").mouseleave(function () {
	$(this).find("> ul").hide();
	$(".nav_back").hide();
});

// 모바일 메뉴
$(".m_nav_icon").click(function (e) {
	e.preventDefault();

	if ($(".m_nav").hasClass('on')) {
		$(".m_nav").removeClass('on');
	} else {
		$(".m_nav").addClass('on');
		$("body").css("overflow-y", "hidden");
	}
});

$(".close_icon").click(function () {
	$(".m_nav").removeClass('on');
	$("body").css("overflow-y", "auto");
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
			touchMove: true
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

// 룩북 반응형 모바일 슬라이드
$(".lookbook_m").slick({
	centerMode: true,
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 3000,
	responsive: [
		{
			breakpoint: 840,
			settings: {
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3,
				infinite: true,
				arrows: true,
				autoplay: true,
				autoplaySpeed: 3000,
			}
		},
		{
			breakpoint: 480,
			settings: {
				centerMode: true,
				centerPadding: '16px',
				slidesToShow: 1,
				infinite: true,
				arrows: true,
				autoplay: true,
				autoplaySpeed: 3000,
			}
		}
	]
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
$(window).scroll(function () {
	if ($(this).scrollTop() > 1000) {
		$("#btn_top").show();
	} else {
		$("#btn_top").hide();
	}
});

$("#btn_top").click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, 400);
	return false;
});

$(function () {
	var $w = $(window),
		footerHei = $('#footer').outerHeight(),
		$btn_top = $('#btn_top');

	$w.on('scroll', function () {
		var sT = $w.scrollTop();
		var val = $(document).height() - $w.height() - footerHei;

		if (sT >= val)
			$btn_top.addClass('on')
		else
			$btn_top.removeClass('on')
	});
});

$(window).resize(function() {
	const w_width = $(window).width();

	if (w_width < 1240) {
		$("#btn_top").css("visibility", "hidden");
	} else {
		$("#btn_top").css("visibility", "visible");
	}
});