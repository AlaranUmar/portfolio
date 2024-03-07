var typed = new Typed(".typing", {
  strings: [
    " ",
    "Web Designer",
    "Web Developer",
    "Graphics Designer",
    "Mechatronic Engineer",
    "Electronic Engineer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}
