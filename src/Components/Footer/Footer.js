import React from "react";
import classes from "./Footer.module.css";
import youtubeImg from "../../Assets/Social/youtube-icon.png";
import facebookImg from "../../Assets/Social/Facebook_logo.png";
import spotifyImg from "../../Assets/Social/Spotify.png";

const Footer = () => {
  return (
    <div className="d-flex align-items-center bg-info p-3">
      <h1 className={classes.title}>The Generics</h1>
      <ul className={classes.list}>
        <li className="me-3 ">
          <a href="https://www.youtube.com">
            <img alt="youtubeImg" src={youtubeImg} />
          </a>
        </li>
        <li className="me-3">
          <a href="https://www.spotify.com">
            <img alt="spotifyImg" src={spotifyImg} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com">
            <img alt="facebookImg" src={facebookImg} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
