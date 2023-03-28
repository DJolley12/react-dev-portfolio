import React, { useState } from "react";
import "./stuff-i-use.css";

//Gopls, GitHub, Package Managers

function StuffILove() {
  //state hooks
  const [displayNeovim, setDisplayNeovim] = useState(false);
  const [displayTmux, setDisplayTmux] = useState(false);
  const [displayAerc, setDisplayAerc] = useState(false);
  const [displayGit, setDisplayGit] = useState(false);
  const [displayBackButton, setDisplayBackButton] = useState(false);
  const [displayGopls, setDisplayGopls] = useState(false);
  const [displayPopOS, setDisplayPopOS] = useState(false);
  const [displayGitHub, setDisplayGitHub] = useState(false);
  const [displayGitLab, setDisplayGitLab] = useState(false);
  const [displayST, setDisplayPackageMangers] = useState(false);
  const [displaySpotify, setDisplaySpotify] = useState(false);
  const [displayVimium, setDisplayVimium] = useState(false);
  const [displayMoonlander, setDisplayMoonlander] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(true);

  //callbacks
  function changeDisplayNeovim(newDisplay) {
    setDisplayNeovim(newDisplay);
  }

  function changeDisplayTmux(newDisplay) {
    setDisplayTmux(newDisplay);
  }

  function changeDisplayAerc(newDisplay) {
    setDisplayAerc(newDisplay);
  }

  function changeDisplayGit(newDisplay) {
    setDisplayGit(newDisplay);
  }

  function changeDisplayBackButton(newDisplay) {
    setDisplayBackButton(newDisplay);
  }

  function changeDisplayDisplayGopls(newDisplay) {
    setDisplayGopls(newDisplay);
  }

  function changeDisplayPopOS(newDisplay) {
    setDisplayPopOS(newDisplay);
  }

  function changeDisplayGitHub(newDisplay) {
    setDisplayGitHub(newDisplay);
  }

  function changeDisplayGitLab(newDisplay) {
    setDisplayGitLab(newDisplay);
  }

  function changeDisplayST(newDisplay) {
    setDisplayPackageMangers(newDisplay);
  }

  function changeDisplaySpotify(newDisplay) {
    setDisplaySpotify(newDisplay);
  }

  function changeDisplayVimium(newDisplay) {
    setDisplayVimium(newDisplay);
  }

  function changeDisplayMoonlander(newDisplay) {
    setDisplayMoonlander(newDisplay);
  }

  function changeDisplayMenu(newDisplay) {
    setDisplayMenu(newDisplay);
  }

  //handleClicks
  function handleNeovimClick() {
    changeDisplayNeovim(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleTmuxClick() {
    changeDisplayTmux(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleAercClick() {
    changeDisplayAerc(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleGitClick() {
    changeDisplayGit(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleGoplsClick() {
    changeDisplayDisplayGopls(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handlePopOSClick() {
    changeDisplayPopOS(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleGitHubClick() {
    changeDisplayGitHub(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleGitLabClick() {
    changeDisplayGitLab(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleSTClick() {
    changeDisplayST(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }
  function handleSpotifyClick() {
    changeDisplaySpotify(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleVimiumClick() {
    changeDisplayVimium(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleMoonlanderClick() {
    changeDisplayMoonlander(true);
    changeDisplayBackButton(true);
    changeDisplayMenu(false);
  }

  function handleBackButtonClick() {
    changeDisplayNeovim(false);
    changeDisplayTmux(false);
    changeDisplayAerc(false);
    changeDisplayGit(false);
    changeDisplayDisplayGopls(false);
    changeDisplayPopOS(false);
    changeDisplayGitHub(false);
    changeDisplayGitLab(false);
    changeDisplayST(false);
    changeDisplaySpotify(false);
    changeDisplayVimium(false);
    changeDisplayMoonlander(false);
    changeDisplayBackButton(false);
    changeDisplayMenu(true);
  }

  const underlineStyle = {
    textDecoration: "underline",
    marginTop: "3vh",
    height: "3%",
    fontSize: "80%",
    marginLeft: "5%",
  };

  const backButtonStyle = {
    marginTop: "1.5vh",
    marginBottom: "3vh",
    marginLeft: "1vw",
    width: "7%",
    textAlign: "center",
  };

  const paragraphStyle = {
    marginLeft: "1.5vw",
    marginRight: "1.5vw",
    fontSize: "80%",
  };

  return (
    <>
      {displayMenu && (
        <>
          <div className="row">
            <div
              className="main_text_color col-sm"
              onClick={handleNeovimClick}
              style={underlineStyle}
            >
              Neovim
            </div>
            <div
              className="main_text_color col-sm"
              onClick={handleTmuxClick}
              style={underlineStyle}
            >
              Tmux
            </div>
          </div>
          <div className="row">
            <div
              className="main_text_color col-sm"
              onClick={handleAercClick}
              style={underlineStyle}
            >
              Aerc
            </div>
            <div
              className="main_text_color col-sm"
              onClick={handleGitClick}
              style={underlineStyle}
            >
              Git
            </div>
          </div>
          <div className="row">
            <div
              className="main_text_color col-sm"
              onClick={handlePopOSClick}
              style={underlineStyle}
            >
              Pop!_OS
            </div>
            <div
              className="main_text_color col-sm"
              onClick={handleGitHubClick}
              style={underlineStyle}
            >
              GitHub
            </div>
          </div>
          <div className="row">
            <div
              className="main_text_color col-sm"
              onClick={handleGitLabClick}
              style={underlineStyle}
            >
              GitLab
            </div>
            <div
              className="main_text_color col-sm"
              onClick={handleMoonlanderClick}
              style={underlineStyle}
            >
              Moonlander Keyboard
            </div>
          </div>
          <div className="row">
            <div
              className="main_text_color col-sm"
              onClick={handleSTClick}
              style={underlineStyle}
            >
              Suckless ST (Simple Terminal)
            </div>
            <div
              className="main_text_color col-sm"
              onClick={handleVimiumClick}
              style={underlineStyle}
            >
              Vimium
            </div>
          </div>
          <div className="row">
            <div
              className="main_text_color col-sm"
              onClick={handleSpotifyClick}
              style={underlineStyle}
            >
              Spotify
            </div>
            <div
              className="main_text_color col-sm"
              onClick={handleGoplsClick}
              style={underlineStyle}
            >
              gopls
            </div>
          </div>
        </>
      )}
      {displayBackButton && (
        <a
          id="back_to_stuff_button"
          className="secondary_button"
          onClick={handleBackButtonClick}
          style={backButtonStyle}
        >
          Back
        </a>
      )}
      {displayNeovim && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          Since I work almost exclusively in the terminal, I love to use
          terminal based everything. Neovim is currently my first choice when
          working with any language. Thanks to LSP technology (at least vs code
          did something well) we can now use our personal favorite editor when
          working with any language.
        </p>
      )}
      {displayTmux && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          I leverage tmux for my terminal-based workflow, and will work almost
          exclusively in the terminal, avoiding the mouse whenever possible.
          This allows me to script out workflows, and when working with
          microservices and kubernetes, this can make locally running a service
          that has 6 other services it depends on much faster to spin up for
          integration testing.
        </p>
      )}
      {displayAerc && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          I love Aerc for email. It's a terminal based email client with some
          awesome capabilities. I used to use Neomutt (which I still love), but
          have moved onto Aerc due to it's more hassle free nature, and baked in
          features. Check it out {"=>"}{" "}
          <a
            onClick={() => window.open("https://aerc-mail.org/", "_blank")}
            className="flicker link_tag"
          >
            here
          </a>
        </p>
      )}
      {displayGit && (
        <>
          <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
            Git is considered an industry standard at this point for a good
            reason. Git is considered one of the essential skills to have as a
            developer these days, and understanding how to perform advanced git
            operations will help you be much more efficient in your day to day
            work.
          </p>
          <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
            For those who are newer, git basically allows you to version your
            code, so you can have different 'save points' if you will. If you
            make a change that creates a bug, you can go back through different
            'versions' or commits in your code, and restore your project from
            that point.
          </p>
        </>
      )}
      {displayGopls && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          My LSP preference for when working in golang. There are a lot of great
          features such as built in formatting, keeping go code looking neat and
          consistent across teams.
        </p>
      )}
      {displayPopOS && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          Pop!_OS is the current Linux distribution I'm using. I like it due to
          it's hassle free nature during setup, especially with nvidia graphics
          cards (I know nvidia has a bad rep, but these were the cheaper ones
          when I bought my desktop). Gaming is easier with this distro as well.
        </p>
      )}
      {displayGitHub && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          GitHub is free, that's basically why I use it. After treading legal
          grey area by using licensed code to feed their AI models, GitHub
          somewhat showed it's true colors to me. I'm currently looking at
          different options for hosting my source.
        </p>
      )}
      {displayGitLab && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          GitLab is what I'm currently using at my employer, and I'm really
          liking it so far. I'm considering moving all my GitHub code over to
          here, or sourcehut.
        </p>
      )}
      {displayST && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          ST is the best terminal I've used, and I really miss it whenever I
          have to work on my work Mac (not by choice). It's incredibly fast and
          responsive, and while it was a little bit of a pain to configure,
          patch, and build it myself from source (I had to install a few C
          libraries to get it compiled), it was worth it, and I won't go back.
          My only issue is the suckless devs can be overly stubborn over
          different issues (see lack of emoji support).
        </p>
      )}
      {displaySpotify && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          I love music. I'm a musician, but listening to music can help focus,
          and create a state of flow. Check out my main flow playlist {"=>"}{" "}
          <a
            onClick={() =>
              window.open(
                "https://open.spotify.com/playlist/4O0Eeozj7U0t2fLo7iPVMv?si=rUx5xBcPR12elc2-bp-1qg",
                "_blank"
              )
            }
            className="flicker link_tag"
          >
            here
          </a>
          .
        </p>
      )}
      {displayVimium && (
        <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
          Vimium plugin for Firefox is how I browse. It allows you to use vim
          style keybindings for your browser for those of us who fear the mouse.
        </p>
      )}
      {displayMoonlander && (
        <>
          <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
            This keyboard is fantastic, and I went to starting to have wrist
            pain, to none at all when I started using it. It has an ortholinear
            setup, meaning the keys aren't staggered, which makes it easier on
            the fingers and wrists to type on. On top of this, it is split, and
            allows you to tilt to allow for a more natural ergonomic hand
            position.
          </p>
          <p className="main_text_color stuff_paragraph" style={paragraphStyle}>
            Additionally, the keyboard comes with flashable firmware, so you can
            program your own layout, with layers, keyboard mouse settings,
            macros, etc. It's a must have for me.
          </p>
        </>
      )}
    </>
  );
}

export default StuffILove;
