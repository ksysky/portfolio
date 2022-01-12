// ie forEach 지원
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// ie 알림
agent = navigator.userAgent.toLowerCase(); 
if ( 
  (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1)
  || (agent.indexOf("msie") !== -1) 
) { 
    alert('이 사이트는 크롬 브라우저의 사용을 권장합니다.');
}

// 메인 타이핑 애니메이션
var content = "안녕하세요.\n신입 웹퍼블리셔\n김수연의 포트폴리오입니다."
var text = document.querySelector(".t_text");
var i = 0;

function typing() {
  if (i < content.length) {
    var txt = content[i++]; // 0에서 끝 숫자까지 0~30
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
  }
}
setInterval(typing, 150);

// 메인 화살표 스크롤 자동 이동
$(".scroll_box").click(function(){
  var secondTop = $("#intro").offset().top;
  $("html, body").animate({scrollTop: secondTop},500);
});

// 포트폴리오 슬라이드
var swiper = new Swiper('.slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
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

// email.js
// $(document).ready(function () {
//   emailjs.init("user_EbHx4mOQ5jtqa1EjfP7Sx");
//   //"user_xxxxx"이 부분은 사용자마다 다르니 반드시 emailJS의 installation 화면을 확인
//   $('input[name=submit]').click(function () {

//       var templateParams = {
//           //각 요소는 emailJS에서 설정한 템플릿과 동일한 명으로 작성!
//           name: $('input[name=name]').val(),
//           phone: $('input[name=phone]').val(),
//           email: $('input[name=email]').val(),
//           message: $('textarea[name=message]').val()
//       };


//       emailjs.send('service_7ptqt2n', 'template_ucq9424', templateParams)
//           //emailjs.send('service ID', 'template ID', 보낼 내용이 담긴 객체)
//           .then(function (response) {
//               alert('메일이 보내졌습니다.', response.status, response.text);
//           }, function (error) {
//               alert('메일을 보내지 못했습니다.', error);
//           });
//   });
// });

// 메뉴 버튼 클릭 애니메이션
$(".pc_menu ul li a").click(function(){
  $("html, body").animate({
    scrollTop: $($.attr(this,"href")).offset().top
  },500);
  return false;
});

$(".m_menu ul li a").click(function(){
  $("html, body").animate({
    scrollTop: $($.attr(this,"href")).offset().top
  },500);
  return false;
});

// 메뉴 액티브
window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
  document.querySelectorAll("section").forEach(function(item, index) {
    var sTop = item.offsetTop - 50;
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





