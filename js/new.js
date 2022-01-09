// Memory Price Section
let totalPrice = document.getElementById("total-price");
let overAllPrice = document.getElementById("total-sale-price");

function handleMemory(price) {
  const memoryPrice = document.getElementById("extra-memory-cost").innerText;
  if (price != memoryPrice) {
    totalPrice.innerText = parseInt(totalPrice.innerText) - memoryPrice + price;
    overAllPrice.innerText = totalPrice.innerText;
    document.getElementById("extra-memory-cost").innerText = price;
  } else {
    alert("already selected");
  }
}

function handleStorage(price) {
  const storagePrice = document.getElementById("extra-storage-cost").innerText;
  if (price != storagePrice) {
    totalPrice.innerText =
      parseInt(totalPrice.innerText) - storagePrice + price;
    overAllPrice.innerText = totalPrice.innerText;
    document.getElementById("extra-storage-cost").innerText = price;
  } else {
    alert("already selected");
  }
}

function handleDel(price) {
  const delCost = document.getElementById("delivery-charge-cost").innerText;
  if (price != delCost) {
    totalPrice.innerText = parseInt(totalPrice.innerText) - delCost + price;
    overAllPrice.innerText = totalPrice.innerText;
    document.getElementById("delivery-charge-cost").innerText = price;
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
