(function () {
  "use strict";

  var SHOW_AFTER = 500;      // tombol muncul jika scroll lebih dari 500px
  var RING_LENGTH = 182.2;   // keliling lingkaran r=29
  var MAX_ALTITUDE = 700;    // km, hanya untuk label

  var btn = document.getElementById("toTop");
  var bar = document.getElementById("ringBar");
  var tip = document.getElementById("tip");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ticking = false;

  function update() {
    var y = window.scrollY || document.documentElement.scrollTop;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var progress = max > 0 ? Math.min(y / max, 1) : 0;

    // tampilkan atau sembunyikan tombol
    btn.classList.toggle("show", y > SHOW_AFTER);

    // isi cincin progres
    bar.style.strokeDashoffset = RING_LENGTH * (1 - progress);

    // ketinggian turun seiring scroll ke bawah
    var altitude = Math.round(MAX_ALTITUDE * (1 - progress));
    tip.textContent = "Ketinggian " + altitude + " km, kembali ke atas";

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  btn.addEventListener("click", function () {
    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }
    btn.classList.add("launching");
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(function () {
      btn.classList.remove("launching");
    }, 1000);
  });

  update();
})();