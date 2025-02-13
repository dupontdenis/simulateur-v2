// Set the initial dimension to 10 cm
document.querySelector("#testV1 .conteneur").style.width = "10cm";

function proportion(n) {
  return function (m) {
    return (m / n).toFixed(1);
  };
}

function pxToCm(px) {
  const dpi = 96; // Assuming screen density is 96 DPI
  const cmPerInch = 2.54;
  return ((px / dpi) * cmPerInch).toFixed(1);
}

function tick() {
  let rapportBody = proportion(
    document.querySelector("#testV1 .conteneur").offsetWidth
  );
  let conteneurWidthPx =
    document.querySelector("#testV1 .conteneur").offsetWidth;
  let conteneurWidthCm = pxToCm(conteneurWidthPx);
  document.querySelector(
    "#largeur"
  ).textContent = `width = ${conteneurWidthCm} cm`;

  let I = document.querySelectorAll("#testV1 .item");
  for (let i = 0; i < I.length; i++) {
    let itemWidthPx = I[i].offsetWidth;
    let itemWidthCm = pxToCm(itemWidthPx);
    I[i].textContent = `${rapportBody(itemWidthPx)} : ${itemWidthCm} cm`;
  }

  window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);

// Set the initial dimension to 10 cm
document.querySelector("#testV1 .conteneur").style.width = "378px";
