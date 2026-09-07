/* ==========================================================================
   NIKHIL.SEC — shared behavior
   Mobile menu toggle, scroll-spy nav (home page anchors), reveal-on-scroll,
   background node canvas, and a lightweight writeup filter helper.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("burgerBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      mobileMenu.classList.toggle("open");
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* ---------- scroll-spy nav (only meaningful on the home page,
     where nav links point at in-page anchors). On interior pages the
     active link is set statically in the HTML via class="active". ---------- */
  var navAnchors = document.querySelectorAll('nav.links a[href^="#"]');
  var idSections = document.querySelectorAll("main section[id]");
  if (navAnchors.length && idSections.length) {
    var setActive = function () {
      var current = "";
      idSections.forEach(function (sec) {
        var rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          current = sec.getAttribute("id");
        }
      });
      navAnchors.forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
      });
    };
    window.addEventListener("scroll", setActive);
    setActive();
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- background node canvas ---------- */
  var canvas = document.getElementById("bgcanvas");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var w, h, nodes = [];
    var NODE_COUNT = 46;
    var MAX_DIST = 150;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = Math.min(window.innerHeight * 1.1, 900);
      canvas.style.height = h + "px";
    }

    function initNodes() {
      nodes = [];
      for (var i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
        });
      }
    }

    function step() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (var a = 0; a < nodes.length; a++) {
        for (var b = a + 1; b < nodes.length; b++) {
          var dx = nodes[a].x - nodes[b].x;
          var dy = nodes[a].y - nodes[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            var alpha = (1 - dist / MAX_DIST) * 0.12;
            ctx.strokeStyle = "rgba(201,135,63," + alpha + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.stroke();
          }
        }
      }
      for (var c = 0; c < nodes.length; c++) {
        ctx.fillStyle = "rgba(229,167,94,0.35)";
        ctx.beginPath();
        ctx.arc(nodes[c].x, nodes[c].y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(step);
    }

    resize();
    initNodes();
    window.addEventListener("resize", function () {
      resize();
      initNodes();
    });
    requestAnimationFrame(step);
  }

  /* ---------- writeups category filter (writeups.html only) ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var filterCards = document.querySelectorAll("[data-category]");
  if (filterBtns.length && filterCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        var target = btn.getAttribute("data-filter");
        filterCards.forEach(function (card) {
          var match = target === "all" || card.getAttribute("data-category") === target;
          card.style.display = match ? "" : "none";
        });
      });
    });
  }

  /* ---------- contact form: frontend-only fallback ---------- */
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.querySelector("#name").value.trim();
      var email = contactForm.querySelector("#email").value.trim();
      var subject = contactForm.querySelector("#subject") ? contactForm.querySelector("#subject").value.trim() : "";
      var message = contactForm.querySelector("#message").value.trim();
      var note = document.getElementById("formNote");

      if (!name || !email || !message) {
        if (note) note.textContent = "Please fill in your name, email, and message before sending.";
        return;
      }

      var mailto =
        "mailto:bashyalnikhil@gmail.com" +
        "?subject=" + encodeURIComponent(subject || "Portfolio contact from " + name) +
        "&body=" + encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");

      if (note) {
        note.textContent = "No backend is connected yet — opening your email client to send this message directly.";
      }
      window.location.href = mailto;
    });
  }
})();
