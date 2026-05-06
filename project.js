
function scrollSlider(id, direction) {
  const slider = document.getElementById(id);
  slider.scrollLeft += direction * 320;
}


function openPopup(src) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");

  popup.style.display = "flex";
  img.src = src;
}

// CLOSE POPUP
function closePopup() {
  document.getElementById("popup").style.display = "none";
}