// 모바일 메뉴 버튼
$(".mBtn").click(function() {
    $(".m_menu").toggleClass("on");
    $(".mBtn").toggleClass("on");
    $(".m_back").toggleClass("on");
});

// 메인 타이핑 애니메이션
const content = "안녕하세요. \n 신입 웹퍼블리셔 \n 김수연의 포트폴리오입니다."
const text = document.querySelector(".t_text");
let i = 0;

function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if(i > content.length) {
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 200);