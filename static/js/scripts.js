hljs.initHighlightingOnLoad();

$("pre:has(code)").wrap(function() {
  return `<div class="window mac">
    <div class="window-content"></div>
  </div>`
});

$(".window.mac .window-content").prepend(`
  <div class="window-title-bar">
        <div class="close"></div>
        <div class="minimize"></div>
        <div class="maximize"></div>
        <div class="zoom"></div>
  </div>`
);
