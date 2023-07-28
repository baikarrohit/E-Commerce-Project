import React from "react";
const h1Styling = {
  fontFamily: "Times New Roman",
  fontSize: "55px",
  fontWeight: "bold",
  marginLeft: '3rem',
  color: 'white'
};
const Footer = () => {
  return (
    <div className="d-flex align-items-center bg-info p-3">
      <h1 style={h1Styling}>The Generics</h1>
      <ul className="list-unstyled d-flex mb-0 ms-auto">
        <li className="me-3 ">
          <a href="#youtube">Youtube</a>
        </li>
        <li className="me-3">
          <a href="#spotify">Spotify</a>
        </li>
        <li>
          <a href="#facebook">Facebook</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
