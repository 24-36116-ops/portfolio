
function scrollSlider(id, direction) {
  const slider = document.getElementById(id);
  slider.scrollLeft += direction * 300;
}


function openPopup(src) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  const video = document.getElementById("popup-video");

  popup.style.display = "flex";
  img.style.display = "block";
  video.style.display = "none";

  img.src = src;
}

function playVideo(src) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  const video = document.getElementById("popup-video");

  popup.style.display = "flex";
  img.style.display = "none";
  video.style.display = "block";

  video.src = src;
  video.play();
}

function closePopup() {
  const popup = document.getElementById("popup");
  const video = document.getElementById("popup-video");

  popup.style.display = "none";
  video.pause();
}