// 모바일 메뉴 버튼
$(".mBtn").click(function() {
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
        text.innerHTML += txt === "\n" ? "<br/>" : txt; // 줄바꿈
    }
}
setInterval(typing, 150);