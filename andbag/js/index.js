// 헤더 스크롤 효과
$(window).scroll(function () {
	const scroll_top = $(this).scrollTop();

	if (scroll_top >= 50) {
		$("#header").addClass("white");
		$(".header").addClass("on");
	} else {
		$("#header").removeClass("white");
		$(".header").removeClass("on");
	}
});

// 메뉴 효과
$(".menu li").mouseleave(function () {
	$("#header").css("height", "auto");
});

$(".menu li:not(.one)").mouseover(function () {
	$("#header").css("height", "450px");
});

$(".menu li.one").mouseover(function () {
	$("#header").css("height", "auto");
});

$("#header").mouseenter(function () {
	$(this).addClass("white");
	$(".header").addClass("on");
});

$("#header").mouseleave(function () {
	const top = $(window).scrollTop();

	if (top >= 50) {
		$(this).addClass("white");
		$(".header").addClass("on");
	} else {
		$(this).removeClass("white");
		$(".header").removeClass("on");
	}
});

// 모바일 메뉴 버튼
$(".close_icon").click(function (e) {
	e.preventDefault();

	$(".header").toggleClass("black");
	$(".mNav_back").toggleClass("w");
	$(this).toggleClass("active");
	$(".mNav > ul").toggleClass("mNav_menu");
	$(".login").toggleClass("show");

	if ($(this).hasClass("active")) {
		$('html, body').css({
			'overflow': 'hidden'
		});
		$(this).on('scroll touchmove mousewheel', function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
	} else {
		$('html, body').css({
			'overflow': 'auto'
		});
		$(this).off('scroll touchmove mousewheel');
	}
});

// 모바일 메뉴 클릭
$(".mNav > ul > li").click(function () {
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
		$(this).find("> ul").stop().slideUp(300);
	} else {
		$(this).addClass("active");
		$(this).find("> ul").stop().slideDown(300);
		$(this).siblings().removeClass("active");
		$(this).siblings().find("> ul").stop().slideUp(300);
	}
});

// 메인 슬라이드 배너
var swiper = new Swiper('.banner1', {
	slidesPerView: 1,
	effect: "fade",
	loop: true,
	speed : 5000,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// 신상 베스트 슬라이드
var swiper = new Swiper('.ms_slide', {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 30,
		},
		768: {
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 15,
		},
		320: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		200: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
	},
});

// 메인 슬라이드 탭메뉴
const ms_btn = $(".ms_title > ul > li");
const ms_cont = $(".ms_slide");
const ms_all = $(".all");

ms_cont.hide().eq(0).show();
ms_all.hide().eq(0).show();

ms_btn.click(function (e) {
	e.preventDefault();
	const target = $(this);
	const index = target.index();
	ms_btn.removeClass("active");
	target.addClass("active");
	ms_cont.css("display", "none");
	ms_cont.eq(index).css("display", "block");

	ms_all.removeClass("active");
	ms_all.next().addClass("active");
	ms_all.css("display", "none");
	ms_all.eq(index).css("display", "block");
});

// MD 추천 슬라이드
var swiper = new Swiper('.mp_slide', {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 30,
		},
		768: {
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 15,
		},
		320: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		200: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
	},
});

// 앤드백 스토리 페이드인 효과
$(window).scroll(function(){
	const wTop = $(this).scrollTop();
	
	if (wTop >= $("#banner2").offset().top - $(window).height()/2){
        $(".t_box").addClass("show");
    }

	if (wTop >= $("#story").offset().top - $(window).height()/2){
        $(".story_text").addClass("show");
        $(".story_img").addClass("show");
    }
	if($(window).width() <= 480) {
		$(".story_text").removeClass("show");
        $(".story_img").removeClass("show");
		$(".story_text").addClass("stop");
        $(".story_img").addClass("stop");
	}
});

// 캠페인 슬라이드
var swiper = new Swiper('.cam_slide', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	effect: "fade",
	pagination: {
		el: ".swiper-pagination",
		type: "bullets",
		clickable: true,
	},
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },
});

// 반응형 대응
// $(window).resize(function() {
// 	if($(window).width() <= 480) {
// 	}
// });