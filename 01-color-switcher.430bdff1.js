!function(){var t,n={body:document.querySelector("body"),btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};n.btnStop.disabled=!0,n.btnStart.addEventListener("click",(function(){t=setInterval((function(){n.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))}),1e3),n.btnStart.disabled=!0,n.btnStop.disabled=!1})),n.btnStop.addEventListener("click",(function(){clearInterval(t),n.btnStart.disabled=!1,n.btnStop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.430bdff1.js.map