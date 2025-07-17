import React from "react";
import useTheme from "../context/Theme";

function ThemeButton() {
    const {themeMode, darkTheme, lightTheme} = useTheme()

    const onChangeBtn = (e) => {
      const darkStatus =   e.currentTarget.checked
      if(darkStatus) {
        darkTheme()
      }
      else {lightTheme()}
    }

  return (
    <>
      <label className="toggle toggle--label">
        <input
         type="checkbox" 
         className="toggle__input"
         value=""
         onChange={onChangeBtn}
         checked={themeMode === 'dark'}
          />
        <div className="toggle__slider"></div>
        <span className="toggle__text">Toggle Theme</span>
      </label>
    </>
  );
}

export default ThemeButton