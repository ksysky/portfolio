// 마우스 휠 이벤트
window.addEventListener("wheel", function(e) {
    e.preventDefault();
},{passive : false});

const $html = $("html");
let page = 1;
const lastPage = $(".scroll").length;

$html.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0) {
        if(page == lastPage) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }

    const posTop = (page-1) * $(window).height();

    $html.animate({scrollTop : posTop},900);
});