document.addEventListener("DOMContentLoaded", function () {
  const run_text_disp = document.getElementById("run-text-dis");
  const text_run_disp = document.getElementById("text-run-dis");
  const get_text_dis = localStorage.getItem("ele_style");

  if (get_text_dis) {
    const stylingData = JSON.parse(get_text_dis);
    // function setTextToDisplay() {
    run_text_disp.textContent = stylingData.font_text;
    run_text_disp.style.fontSize = stylingData.font_size;
    run_text_disp.style.color = stylingData.font_col;
    run_text_disp.style.fontFamily = stylingData.font_family;
    run_text_disp.style.backgroundColor = stylingData.bg_color_sol;
    run_text_disp.style.backgroundImage = stylingData.bg_color_grd;
    run_text_disp.style.textDecoration = stylingData.font_decor_td;
    run_text_disp.style.fontStyle = stylingData.font_decor_fs;
    run_text_disp.style.fontWeight = stylingData.font_decor_fw;
    run_text_disp.style.animation = stylingData.blinking_text;
    text_run_disp.style.animation = stylingData.animate_text;
    //}
    //setTextToDisplay();
  } else {
    console.log("No data storage");
  }

  document.getElementById("back-button").addEventListener("click", () => {
    window.history.back(); // Navigate to the previous page
  });

  const pauseButton = document.getElementById("pause-button");

  // Function to toggle button text and icon
  function toggleButton() {
    if (pauseButton.textContent.includes("Pause")) {
      // Change to "Play" with a play icon
      pauseButton.innerHTML = 'Play <i class="fa-solid fa-play"></i>';
      text_run_disp.style.animationPlayState = "paused";
    } else {
      // Change to "Pause" with a pause icon
      pauseButton.innerHTML = 'Pause <i class="fa-solid fa-pause"></i>';
      text_run_disp.style.animationPlayState = "running";
    }
  }
  // Attach event listener to the button
  pauseButton.addEventListener("click", toggleButton);

  document.getElementById("fullscreen-button").addEventListener("click", () => {
    const runTextDiv = document.getElementById("text-run-div");

    runTextDiv.style.backgroundImage = `url("../image/Background-home-2.jpg")`;
    runTextDiv.style.backgroundSize = "cover";

    // Check if the element is currently in full-screen mode

    if (document.fullscreenElement) {
      // Exit full-screen mode

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox

        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari and Opera

        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge

        document.msExitFullscreen();
      }

      // Remove the background image when exiting full-screen mode
      runTextDiv.style.backgroundImage = ""; // Clear the background image
    } else {
      // Request full-screen mode

      if (runTextDiv.requestFullscreen) {
        runTextDiv.requestFullscreen();
      } else if (runTextDiv.mozRequestFullScreen) {
        // Firefox

        runTextDiv.mozRequestFullScreen();
      } else if (runTextDiv.webkitRequestFullscreen) {
        // Chrome, Safari and Opera

        runTextDiv.webkitRequestFullscreen();
      } else if (runTextDiv.msRequestFullscreen) {
        // IE/Edge

        runTextDiv.msRequestFullscreen();
      }
    }
  });
});
