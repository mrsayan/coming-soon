import React from "react";
import { ReactComponent as IconInstagram } from "./assets/icons/instagram.svg";
import { ReactComponent as IconGithub } from "./assets/icons/github.svg";
import { ReactComponent as IconLinkedin } from "./assets/icons/linkedin.svg";
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">mrsayan</a>
          </div>
          <div className="social">
            <a
              href="https://www.instagram.com/hazra_sayan/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram className="icon" />
            </a>
            <a
              href="https://www.linkedin/in/mrsayan"
              title="Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin className="icon" />
            </a>
            <a
              href="https://www.github.com/mrsayan"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>
              Website coming soon. Please check back to know more. Shoot us an
              email if you're curious.
            </p>
          </div>
          <a href="mailto:hello@sayyan.ml?subject=%5BGithub%5D%20%F0%9F%94%A5%20Let's%20Connect&body=Hey%20Sayan%20%F0%9F%91%8B%F0%9F%8F%BB%2C%20I%20am%20sending%20you%20this%20mail%20after%20seeing%20your%20github%20profile.%0D%0A%0D%0A%5B%20Feel%20free%20to%20ask%20me%20anything%20%3C%2F%3E...%5D%0D%0A%0D%0A%0D%0ABest%2C%0D%0A%5BYour%20Name%5D">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span role="img" aria-label="heart">
            Built with ❤️ by
            <a className="underlined" href="https://www.sayyan.ml" target="_blank" rel="noopener noreferrer"> Sayan </a>
          </span>
        </div>
      </div>
    );
  };
}

export default App;
