import React from "react";

function ThemeButton() {
  return (
    <div className="btn-group float-right" id="theme_button_div" role="group">
      <div float-right id="theme_button_div">
        <button
          type="color_theme_btn button"
          class="main_button"
          id="color_theme_btn"
        >
          Theme: Light
        </button>
      </div>
    </div>
  );
}

export default ThemeButton;
