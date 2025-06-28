document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const popup = document.getElementById("thankYouPopup");
  const closeBtn = document.getElementById("closePopupBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual submission
    popup.classList.remove("hidden");
  });

  // Use the reusable closePopup function
  closeBtn.addEventListener("click", closePopup);
});

function closePopup() {
  document.getElementById('thankYouPopup').classList.add('hidden');
  document.querySelector("form").reset(); 
}
