const icon = document.querySelector("#icon");

icon.onclick = () => {
  // クリックイベントで昼夜切り替え処理
  document.body.classList.toggle("dark-mode");
  //ダークモードの有無で条件分岐、icon.srcを変更
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
};
