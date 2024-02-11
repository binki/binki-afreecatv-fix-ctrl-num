// ==UserScript==
// @name binki-afreecatv-fix-ctrl-num
// @version  1.0
// @homepageURL https://github.com/binki/binki-afreecatv-fix-ctrl-num
// @grant    none
// @description Prevent pressing ctrl+number (e.g., ctrl+1 to go to the first tab of the browser window) from skipping forward/backward in a VOD.
// @match https://*.afreecatv.com/*
// @match https://afreecatv.com/*
// ==/UserScript==

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.which > 47 && e.which < 58) {
    e.stopPropagation();
  }
}, {
  capture: true,
});
