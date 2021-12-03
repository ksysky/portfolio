// 메뉴 버튼 클릭 애니메이션
document.querySelectorAll(".pc_menu ul li a").forEach((li)=>{
  li.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.querySelectorAll(".m_menu ul li a").forEach((li)=>{
  li.addEventListener("click", (event)=>{
    event.preventDefault();
    document.querySelector(li.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 메뉴 액티브
window.addEventListener("scroll", function(){
  let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;
  document.querySelectorAll("section").forEach((item,index)=>{
    let sTop = item.offsetTop - 50;
    if(scrollTop >= sTop) {
      document.querySelectorAll(".pc_menu ul li").forEach(li=>{
        li.classList.remove("active");
      });
      document.querySelector(".pc_menu ul li:nth-child("+ (index+1) +")").classList.add("active");

      document.querySelectorAll(".m_menu ul li").forEach(li=>{
        li.classList.remove("active");
      });
      document.querySelector(".m_menu ul li:nth-child("+ (index+1) +")").classList.add("active");
    }
  });
});

// 모바일 메뉴 버튼
$(".mBtn").click(function (e) {
  e.preventDefault();
  $(".m_menu").toggleClass("on");
  $(".mBtn").toggleClass("on");
});

// 메인 타이핑 애니메이션
const content = "안녕하세요.\n신입 웹퍼블리셔\n김수연의 포트폴리오입니다."
const text = document.querySelector(".t_text");
let i = 0;

function typing() {
  if (i < content.length) {
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
});
