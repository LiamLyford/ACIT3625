import React, { useContext } from "react";
import styled from "styled-components";
import Switch from "react-switch";
import { IoMdMoon, IoMdFlashlight } from 'react-icons/io'

import { AppContext } from "./AppProvider";

const ThemeSwitcher = () => {
    const { toggleTheme, themeMode } = useContext(AppContext);
    const handleThemeChange = (e) => {
      toggleTheme();
    };
    return (
      <Main>
        <span style={{paddingRight: 10}}>Toggle Theme</span>
        <Switch
          checked={themeMode === "lightTheme" ? true : false}
          height={20}
          width={40}
          checkedIcon={<IoMdFlashlight/>}
          uncheckedIcon={<IoMdMoon/>}
          onColor={'#9c9c9c'}
          offColor={'#d1d1d1'}
          onChange={handleThemeChange}
        />
      </Main>
    );
  };
  
  export default ThemeSwitcher;
  
  const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .custom-classname .react-toggle--checked .react-toggle-track {
      background-color: red;
      height: 200px;
      width: 200px;
      padding: 30px;
    }
  `;