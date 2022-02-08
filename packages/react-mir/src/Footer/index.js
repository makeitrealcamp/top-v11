import React, { useContext } from "react";
import { ThemeColors, ThemeContext } from '../App';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer style={ ThemeColors[theme] }>
      <span>Footer, Make it Real, 2021</span>
    </footer>
  );
}

export default Footer;
