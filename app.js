// 클릭하거나 키보드로 실행했을 때 지정한 CSS 클래스를 켜고 끕니다.
function makeInteractive(element) {
  const toggle = () => element.classList.toggle("is-active");

  element.addEventListener("click", toggle);
  element.addEventListener("keydown", (event) => {
    // 링크나 버튼처럼 Enter 또는 Space 키로도 조작할 수 있게 합니다.
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  });
}

makeInteractive(document.querySelector("#hello-title"));
makeInteractive(document.querySelector("#hello-message"));
