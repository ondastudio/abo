let hSrc, cSrc, fSrc, lSrc, fSrcP;
let isSafari, ua, webkit, iOSSafari;
document.addEventListener("DOMContentLoaded", () => {
  //check desktop safari
  isSafari = window.safari !== undefined;
  //mobile safari
  ua = window.navigator.userAgent;
  iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  webkit = !!ua.match(/WebKit/i);
  iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  const src = "https://cdn.jsdelivr.net/gh/ondastudio/abo@main/abo-digital-";

  if (window.location.pathname === "/") {
    if (isSafari || iOSSafari) {
      hSrc = src + "01-home-hero-3d-bg.mp4";

      cSrc = src + "02-home-cta-3d-bg.mp4";

      fSrc = src + "03-home-footer-3d-bg.mp4";

      lSrc = src + "home-animation.mp4";
      $(".is-growth-lottie").remove();
    } else {
      hSrc = src + "01-home-hero-3d-alpha.webm";

      cSrc = src + "02-home-cta-3d-alpha.webm";

      fSrc = src + "03-home-footer-3d-alpha.webm";

      $(".is-grow-video").remove();
    }
  } else if (window.location.pathname === "/team") {
    if (isSafari || iOSSafari) {
      hSrc = fSrc = src + "04-team-3d-bg.mp4";
    } else {
      hSrc = fSrc = src + "04-team-3d-alpha.webm";
    }
  } else if (window.location.pathname === "/portfolio") {
    if (isSafari || iOSSafari) {
      hSrc = fSrc = src + "05-portfolio-3d-bg.mp4";
    } else {
      hSrc = fSrc = src + "05-portfolio-3d-alpha.webm";
    }
  } else if (
    window.location.pathname === "/news" ||
    window.location.pathname.includes("/news-posts")
  ) {
    if (isSafari || iOSSafari) {
      hSrc = fSrc = src + "06-news-3d-bg.mp4";
    } else {
      hSrc = fSrc = src + "06-news-3d-alpha.webm";
    }
  }
});
