import React from "react";
const year = new Date();
function Footer() {
  return (
    <footer>
      <p>Copyright © {year.getFullYear()}</p>
    </footer>
  );
}
export default Footer;
