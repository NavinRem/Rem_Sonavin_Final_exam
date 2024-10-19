const text_scr = document.getElementById("text-run");
const scr_text = document.getElementById("run-text");
const btn_setT = document.getElementById("setTextToPreview");

const fontSizeSelect = document.getElementById("font-size");
const fontColorSelect = document.getElementById("font-color");
const fontFamilySelect = document.getElementById("font-family");
const fontStyleSelect = document.getElementById("font-style");
const BgColSelect = document.getElementById("bg-color");
const TSpeedSelect = document.getElementById("text-speed");
const TBlinkSelect = document.getElementById("text-blink");
const textDirectionSelect = document.getElementById("text-direction");

document.addEventListener("DOMContentLoaded", function () {
  //I tried to use saved data from local storage here, but it didn't work
  //It only work well on chrome,  but not on other browsers

  // const saved_data = localStorage.getItem("ele_style");
  // if (saved_data) {
  //   const stored_data = JSON.parse(saved_data);

  //   scr_text.textContent = stored_data.font_text;
  //   text_scr.style.fontSize = stored_data.font_size;
  //   text_scr.style.color = stored_data.font_col;
  //   text_scr.style.fontFamily = stored_data.font_family;
  //   text_scr.style.backgroundColor = stored_data.bg_color_sol;
  //   text_scr.style.backgroundImage = stored_data.bg_color_grd;
  //   text_scr.style.textDecoration = stored_data.font_decor_td;
  //   text_scr.style.fontStyle = stored_data.font_decor_fs;
  //   text_scr.style.fontWeight = stored_data.font_decor_fw;
  //   text_scr.style.animation = stored_data.blinking_text;
  //   scr_text.style.animation = stored_data.animate_text;

  //   fontSizeSelect.value = stored_data.font_size;
  //   // fontColorSelect.value = stored_data.font_col;
  //   // fontFamilySelect.value = stored_data.font_family;
  //   // fontStyleSelect.value = stored_data.font_decor_fs;
  //   // BgColSelect.value = stored_data.bg_color_sol;
  //   // TSpeedSelect.value = stored_data.animate_text;
  //   // TBlinkSelect.value = stored_data.blinking_text;
  // }

  btn_setT.addEventListener("click", () => {
    var userInput = document.getElementById("text-input").value;
    scr_text.innerHTML = userInput;
  });

  const th_btn = document.querySelectorAll(".th-btn");

  th_btn.forEach((button) => {
    button.addEventListener("click", () => {
      const computedStyle = getComputedStyle(button);
      const bg_color = computedStyle.backgroundColor;
      const bg_img = computedStyle.backgroundImage;

      if (bg_img !== "none") {
        text_scr.style.backgroundColor = ""; //Clear any solid color
        text_scr.style.backgroundImage = bg_img; //Set the background image
      } else {
        text_scr.style.backgroundColor = bg_color; //Set the background color
        text_scr.style.backgroundImage = ""; //Clear any gradient
      }
    });
  });

  fontSizeSelect.addEventListener("input", (e) => {
    scr_text.style.fontSize = `${e.target.value}px`;
    document.getElementById(
      "font-size-display"
    ).innerHTML = `${e.target.value}px`;
  });

  fontColorSelect.addEventListener("input", (e) => {
    scr_text.style.color = e.target.value;
    document.getElementById("text-color").innerHTML = `${e.target.value}`;
  });

  fontFamilySelect.addEventListener("change", (e) => {
    const fontFamilyValue = e.target.value;
    // console.log(`Selected font family: ${fontFamilyValue}`);
    scr_text.style.fontFamily = fontFamilyValue;
    // console.log(`Font family changed to: ${fontFamilyValue}`);
  });

  fontStyleSelect.addEventListener("change", (e) => {
    const style = e.target.value.toLowerCase();
    scr_text.style.fontWeight = style === "bold" ? "bold" : "normal";
    scr_text.style.fontStyle = style === "italic" ? "italic" : "normal";
    scr_text.style.textDecoration = ["underline", "line through"].includes(
      style
    )
      ? style
      : "none";
  });

  BgColSelect.addEventListener("input", (e) => {
    text_scr.style.backgroundImage = "";
    text_scr.style.backgroundColor = e.target.value;
    document.getElementById("bg-text").innerHTML = `${e.target.value}`;
  });

  TSpeedSelect.addEventListener("input", (e) => {
    text_scr.style.animationDuration = `${e.target.value}s`;
    document.getElementById(
      "text-speed-second"
    ).innerHTML = `${e.target.value}s`;
  });

  TBlinkSelect.addEventListener("input", (e) => {
    const text_scr_run = document.getElementById("run-text");
    text_scr_run.style.animationDuration = `${e.target.value}s`;
    document.getElementById(
      "text-blink-second"
    ).innerHTML = `${e.target.value}s`;
  });

  textDirectionSelect.addEventListener("change", () => {
    const directionValue = textDirectionSelect.value;
    if (directionValue === "Left-to-Right") {
      text_scr.style.animationDirection = "normal";
    } else if (directionValue === "Right-to-Left") {
      text_scr.style.animationDirection = "reverse";
    }
  });

  const run_button = document.getElementById("run-b");
  run_button.addEventListener("click", () => {
    const computedStyle1 = window.getComputedStyle(scr_text);
    const computedStyle2 = window.getComputedStyle(text_scr);

    const ele_style = {
      font_text: scr_text.textContent,
      font_size: computedStyle1.fontSize,
      font_col: computedStyle1.color,
      font_family: computedStyle1.fontFamily,
      bg_color_sol: computedStyle2.backgroundColor,
      bg_color_grd: computedStyle2.backgroundImage,
      font_decor_td: computedStyle1.textDecoration,
      font_decor_fs: computedStyle1.fontStyle,
      font_decor_fw: computedStyle1.fontWeight,
      animate_text: computedStyle2.animation,
      blinking_text: computedStyle1.animation,
      animate_direct: computedStyle2.animationDirection,
    };
    //JSON.stringify(ele_style) convert ele_style obj into string value and apply it to key value (ele_style)
    localStorage.setItem("ele_style", JSON.stringify(ele_style));
    window.location.href = "../html/text-run.html";
  });

  const resetButton = document.getElementById("reset_btn");
  const myForm = document.getElementById("reset-form");

  resetButton.addEventListener("click", () => {
    myForm.reset();
    localStorage.clear();
  });
});
