// 메인 텍스트 타이핑 효과
const typingBool = false;
const typingIdx = 0;
const liIndex = 0;
const pLength = $(".typing p").length;

const typingTxt = $(".typing p").eq(index).text();
typingTxt = typingTxt.split("");

if (typingBool == false) {
    typingBool = true;
    const tyInt = setInterval(typing,100);
}

function typing() {
    $(".typing p").removeClass("on");
    $(".typing p").eq(liIndex).addClass("on");
    if (typingIdx < typingTxt.length) {
        $(".typing > p").eq(liIndex).append(typingTxt[typingIdx]);
        typingIdx++;
    } else {

    }
}