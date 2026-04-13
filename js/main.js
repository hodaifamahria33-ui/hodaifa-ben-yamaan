(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  var header = document.querySelector(".header");
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector(".nav");

  if (btn && nav && header) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      header.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
        header.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
