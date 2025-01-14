// @name    Res Sender
// @param   coord

const { coord } = TWA;

$.getScript("https://shinko-to-kuma.com/scripts/res-senderV2.js");

window.alert = function() {
    console.log.apply(console, arguments);
};

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function automate() {
  await delay(5000);
  $("#coordinateTargetFirstTime").val(coord);
  $("#saveCoord").click();
  await delay(60000);
  while (true) {
    await delay(1000);
    const button = $("#sendResources.btn")[0];
    if (button) button.click();
    else break;
  }
}

automate();
