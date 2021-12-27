// 메인 화살표 스크롤 자동 이동
$(".scroll_box").click(function(){
  const secondTop = $("#intro").offset().top;
  $("html, body").animate({scrollTop: secondTop},500);
});

// 메뉴 버튼 클릭 애니메이션
document.querySelectorAll(".pc_menu ul li a").forEach(function(li) {
  li.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".m_menu ul li a").forEach(function(li) {
  li.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 메뉴 액티브
// window.addEventListener("scroll", function () {
//   let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
//   document.querySelectorAll("section").forEach((item, index) => {
//     let sTop = item.offsetTop - 50;
//     if (scrollTop >= sTop) {
//       document.querySelectorAll(".pc_menu ul li").forEach(li => {
//         li.classList.remove("active");
//       });
//       document.querySelector(".pc_menu ul li:nth-child(" + (index + 1) + ")").classList.add("active");

//       document.querySelectorAll(".m_menu ul li").forEach(li => {
//         li.classList.remove("active");
//       });
//       document.querySelector(".m_menu ul li:nth-child(" + (index + 1) + ")").classList.add("active");
//     }
//   });
// });
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
  document.querySelectorAll("section").forEach(function(item, index) {
    let sTop = item.offsetTop - 50;
    if (scrollTop >= sTop) {
      document.querySelectorAll(".pc_menu ul li").forEach(function(li) {
        li.classList.remove("active");
      });
      document.querySelector(".pc_menu ul li:nth-child(" + (index + 1) + ")").classList.add("active");

      document.querySelectorAll(".m_menu ul li").forEach(function(li) {
        li.classList.remove("active");
      });
      document.querySelector(".m_menu ul li:nth-child(" + (index + 1) + ")").classList.add("active");
    }
  });
});

// 페이드인 스크롤 애니메이션
// function scrollProgress() {
//   let scroll_top = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight / 2;
//   document.getElementsByClassName("ani").forEach(item => {
//     if (scroll_top >= item.offsetTop) {
//       item.classList.add("show");
//     }
//     // scroll_top > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
//   });
// }

// window.addEventListener("scroll", scrollProgress);

// 모바일 메뉴 버튼
$(".mBtn").click(function (e) {
  e.preventDefault();
  $(".m_menu").toggleClass("on");
  $(".mBtn").toggleClass("on");
  $(".m_back").toggleClass("on");
});

$(".m_back").click(function (e) {
  e.preventDefault();
  $(".m_menu").toggleClass("on");
  $(".mBtn").toggleClass("on");
  $(".m_back").toggleClass("on");
});

// 메인 타이핑 애니메이션
var content = "안녕하세요.\n신입 웹퍼블리셔\n김수연의 포트폴리오입니다."
var text = document.querySelector(".t_text");
var i = 0;

function typing() {
  if (i < content.length) {
    var txt = content[i++]; // 0에서 끝 숫자까지
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
  }
}
setInterval(typing, 150);

// 포트폴리오 슬라이드
const swiper = new Swiper('.slider', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 디자인 갤러리
lightGallery(document.querySelector(".lightgallery"), {
  plugins: [lgZoom],
});

// 탑버튼 이동 스크롤
$(window).scroll(function(){
  if($(this).scrollTop() > 700) {
    $(".top_btn").fadeIn();
  } else {
    $(".top_btn").fadeOut();
  }
});

$(".top_btn").click(function(){
  $("html, body").animate({scrollTop: 0},500);
  return false;
});