let a = document.querySelector(".one");
let b = document.querySelector(".two");
let width = 200;
let height = 30;
let c = document.querySelector(".cat");
let d = document.querySelector(".inputin");
let btn = document.querySelector(".btn");

a.onclick = function () {
  a.style.width = width + 15 + "px";
  a.style.height = height + 15 + "px";
  height++;
  width++;
};
b.ondblclick = function () {
  console.log(b.textContent);
};
c.onclick = function () {
  c.src =
    "https://get.wallhere.com/photo/cat-animals-whiskers-wild-cat-fauna-mammal-vertebrate-close-up-cat-like-mammal-small-to-medium-sized-cats-tabby-cat-domestic-short-haired-cat-bengal-rusty-spotted-cat-european-shorthair-65798.jpg";
  return;
};

btn.onclick = function () {
  let str = d.value;
  let code = str.charCodeAt(0);
  document.querySelector(".out").innerHTML = code;
  if (str >= 0) {
    document.querySelector(".out").innerHTML = "false";
  }
  if (str <= 0) {
    document.querySelector(".out").innerHTML = "false";
  }
  return;
};
