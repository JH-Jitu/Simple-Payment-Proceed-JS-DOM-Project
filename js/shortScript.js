// Memory Price Section
let totalPrice = document.getElementById("total-price");
let overAllPrice = document.getElementById("total-sale-price");

function handlePrice(price, btnID, elementID) {
  const selectedPrice = document.getElementById(elementID).innerText;

  const btnSections = document.querySelectorAll(`.${elementID}-btn`);
  btnSections.forEach((one) => (one.style.backgroundColor = "white"));

  document.getElementById(btnID).style.backgroundColor = "rgb(189, 192, 204)";

  if (price != selectedPrice) {
    totalPrice.innerText =
      parseInt(totalPrice.innerText) - selectedPrice + price;
    overAllPrice.innerText = totalPrice.innerText;
    document.getElementById(elementID).innerText = price;
  } else {
    alert("already selected");
  }
}

const promoSuc = document.getElementById("promo");
const promoSucBtn = document.getElementById("promoBtn");
promoSucBtn.addEventListener("click", function () {
  if (promoSuc.value == "stevekaku") {
    overAllPrice.innerText = parseInt(totalPrice.innerText) * 0.8;
  } else {
    alert("Promo Code was wrong!");
  }
});
