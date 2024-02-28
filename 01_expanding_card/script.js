/**
 * 요구사항
 * - 판넬을 클릭하면, 해당 판넬이 확장되고 나머지 판넬들은 다시 축소되어야 한다.
 * - 클릭 할 때, 해당 판넬에 active class 를 추가해주고, 나머지 판넬의 class 에서는 remove 해줘야 한다.
 *
 * css 에서 active 일 경우 flex 값을 줬기 때문에 js 에서는 active class 유무만 추가/제거 해주면 된다.
 */

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    //클릭이 발생한 panel 에 active 클래스를 추가해준다
    panel.addEventListener("click", () => {
        //이미 활성화 된 panel 의 active 는 제거해주고
        removeActiveClass();
        panel.classList.add("active");
    });
});

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
