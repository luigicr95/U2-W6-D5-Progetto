function changeMode() {
  //document.querySelector(".navbar").classList.toggle("dark-theme");
  let darkObjects = document.querySelectorAll(".dark-target");
  for (i = 0; i < darkObjects.length; i++) {
    let darkBackground = darkObjects[i];
    darkBackground.classList.toggle("dark-theme");
  }
}
