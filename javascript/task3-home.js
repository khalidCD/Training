window.onload = function () {
  const customerID = localStorage.getItem("cam");
  if (!customerID) window.location.href = "index.html";

  document.getElementById("greeting").textContent = "Greeting " + customerID + "!";

  const summaryTab = document.getElementById("summaryTab");
  const transferTab = document.getElementById("transferTab");
  const summaryContent = document.getElementById("summary");
  const transferContent = document.getElementById("transfer");

  summaryTab.addEventListener("click", () => {
    summaryTab.classList.add("active-tab");
    transferTab.classList.remove("active-tab");
    summaryContent.style.display = "block";
    transferContent.style.display = "none";
  });

  transferTab.addEventListener("click", () => {
    transferTab.classList.add("active-tab");
    summaryTab.classList.remove("active-tab");
    summaryContent.style.display = "none";
    transferContent.style.display = "block";
  });

  const sendBtn = document.getElementById("sendButton");
  const amountInput = document.getElementById("amountInput");
  const accountSelect = document.getElementById("accountselect");
  const msg = document.getElementById("transferMessage");

  sendBtn.addEventListener("click", () => {
    const amount = amountInput.value;
    const selectedAccount = accountSelect.value;

    if (!amount || isNaN(amount) || !selectedAccount) return;

    msg.textContent = `Transfer of Rs. ${amount} from your ${selectedAccount} is successful!`;
    msg.style.display = "block";

    setTimeout(() => {
      msg.style.display = "none";
    }, 5000);
  });
};


function toggleDetails(detailBoxId, headerElement) {
  const detailBox = document.getElementById(detailBoxId);
  const arrow = headerElement.querySelector(".arrow");
console.log(headerElement);
  const isVisible = detailBox.style.display === "block";
  detailBox.style.display = isVisible ? "none" : "block";
  arrow.textContent = isVisible ? "▼" : "▲";
}


function openModal() {
  document.getElementById("statement-modal").style.display ="flex";
}

function closeModal() {
  document.getElementById("statement-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-button").forEach(btn =>
    btn.addEventListener("click", openModal)
  );

  document.querySelector(".close-button")?.addEventListener("click", closeModal);

  document.getElementById("logout-button")?.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});
