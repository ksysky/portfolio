// 모바일 메뉴 버튼
$(".mBtn").click(function(e) {
    e.preventDefault();
    $(".m_menu").toggleClass("on");
    $(".mBtn").toggleClass("on");
    $(".m_back").toggleClass("on");
});

// 메인 타이핑 애니메이션
const content = "안녕하세요.\n신입 웹퍼블리셔\n김수연의 포트폴리오입니다."
const text = document.querySelector(".t_text");
let i = 0;

function typing() {
    if(i < content.length) {
        let txt = content[i++]; // 0에서 끝 숫자까지
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
    breakpoints: {
      1024: {
        navigation: false,
      },
    }
  });