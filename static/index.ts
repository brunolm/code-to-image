let codes: Element[] = Array.prototype.slice.call(document.querySelectorAll("pre"), 0);

codes.forEach(c => {
  let code = c.textContent;
  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = 280;
  canvas.height = 40;

  ctx.font = "12px monospace";
  ctx.fillStyle = "#0000ff";

  code.split(/\n/g).forEach((codeLine, i) => {
    ctx.fillText(codeLine, 10, (i + 1) * 12, 260);
  });

  c.parentNode.insertBefore(canvas, c.nextElementSibling);
});