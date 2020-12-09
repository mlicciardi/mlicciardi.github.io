window.addEventListener("load", () => {
  var items = [...document.getElementsByClassName("level-bar-inner")];
  items.forEach((x) => x.style.width = x.dataset.level);
});
