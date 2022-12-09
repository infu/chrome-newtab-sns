"use strict";

// This whole script exists because iframe otherwise causes flickering (light/dark) while the iframe loads
var iframe = document.getElementById("ifr");
iframe.onload = function () {
  setTimeout(() => {
    iframe.style.opacity = 1;
  }, 300);
};
