let refresh = false;

/**
 * Mutation Observer Helper function
 * //developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
 * @param {string} sel The DOM selector to watch
 * @param {object} opt MutationObserver options
 * @param {function} cb Pass Mutation object to a callback function
 */
const Observe = (sel, opt, cb) => {
  const Obs = new MutationObserver((m) => [...m].forEach(cb));
  document.querySelectorAll(sel).forEach((el) => Obs.observe(el, opt));
};

// Detects whenever style attribute (display) from ".section_contact" changes
Observe(
  ".section_contact",
  {
    attributesList: ["style"], // Only the "style" attribute
    attributeOldValue: true // Report also the oldValue
  },
  (m) => {
    // If display is "block", add #contact to url
    if (m.oldValue === "display: none;") {
      onModalShow();
      // If display is "none" remove it
    } else {
      onModalHide();
      refresh = false;
    }
  }
);

let href;
// Modal opens.
function onModalShow() {
  href = window.location.href;
  window.history.pushState({}, "", "/#contact");
}

// Modal hides
function onModalHide() {
  // If refreshed with the /#contact url, change url to Homepage
  if (refresh) window.history.pushState({}, "", "/");
  else window.history.pushState({}, href, href);
}

// If refresh with the /#contact url
if (window.location.href.indexOf("#contact") > -1) {
  // Simulate click on the "Get in touch" button to open modal
  document
    .querySelector(".button.is-icon.no-border.is-menu.w-inline-block")
    .click();
  refresh = true;
  onModalShow();
}
