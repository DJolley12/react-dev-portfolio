import React, { useState } from "react";
import SecondaryButton from "../../../../../Shared/SecondaryButton";
import "./tech-stack.css";

function TechStack() {
  const [displayBackend, setDisplayBackend] = useState(false);
  const [displayFrontend, setDisplayFrontend] = useState(false);

  function changeBackendDisplay(newDisplay) {
    setDisplayBackend(newDisplay);
  }

  function changeFrontendDisplay(newDisplay) {
    setDisplayFrontend(newDisplay);
  }

  const backendContent = {
    buttonText: "_backend",
    class: "",
    styles: {
      position: "absolute",
      top: "10vh",
      left: "15vw",
      height: "2.8vh",
    },
  };

  const backendSelectedContent = {
    buttonText: "_backend",
    class: "",
    styles: {
      opacity: ".5",
      position: "absolute",
      top: "10vh",
      left: "15vw",
      height: "2.8vh",
    },
  };

  const frontendContent = {
    buttonText: "_frontend",
    class: "",
    styles: {
      position: "absolute",
      top: "10vh",
      right: "15vw",
      height: "2.8vh",
    },
  };

  const frontendSelectedContent = {
    buttonText: "_frontend",
    class: "",
    styles: {
      opacity: ".5",
      position: "absolute",
      top: "10vh",
      right: "15vw",
      height: "2.8vh",
    },
  };

  return (
    <>
      {displayBackend ? (
        <SecondaryButton
          content={backendSelectedContent}
          callBacks={[changeBackendDisplay, changeFrontendDisplay]}
          targets={["displayBackend", "displayFrontend"]}
          values={[true, false]}
        />
      ) : (
        <SecondaryButton
          content={backendContent}
          callBacks={[changeBackendDisplay, changeFrontendDisplay]}
          targets={["displayBackend", "displayFrontend"]}
          values={[true, false]}
        />
      )}
      {displayFrontend ? (
        <SecondaryButton
          content={frontendSelectedContent}
          callBacks={[changeBackendDisplay, changeFrontendDisplay]}
          targets={["displayBackend", "displayFrontend"]}
          values={[false, true]}
        />
      ) : (
        <SecondaryButton
          content={frontendContent}
          callBacks={[changeBackendDisplay, changeFrontendDisplay]}
          targets={["displayBackend", "displayFrontend"]}
          values={[false, true]}
        />
      )}
      {displayBackend && (
        <div className="language_section">
          <div className="bar">
            <div id="go_inner" className="bar_inner">
              <div className="tag">Go</div>
            </div>
          </div>
          <div className="bar">
            <div id="proto_inner" className="bar_inner">
              <div className="tag">Protobuf/GRPC</div>
            </div>
          </div>
          <div className="bar">
            <div id="c_sharp_inner" className="bar_inner">
              <div className="tag">C#</div>
            </div>
          </div>
          <div className="bar">
            <div id="rust_inner" className="bar_inner">
              <div className="tag">Rust</div>
            </div>
          </div>
          <div className="bar">
            <div id="winforms_inner" className="bar_inner">
              <div className="tag">WinForms/WPF</div>
            </div>
          </div>
          <div className="bar">
            <div id="avalonia_inner" className="bar_inner">
              <div className="tag">Avalonia UI</div>
            </div>
          </div>
          <div className="bar">
            <div id="razor_inner" className="bar_inner">
              <div className="tag">Razor Pages</div>
            </div>
          </div>
          <div className="bar">
            <div id="ef_inner" className="bar_inner">
              <div className="tag">Entity Framework</div>
            </div>
          </div>
          <div className="bar">
            <div id="sql_inner" className="bar_inner">
              <div className="tag">MSSQL</div>
            </div>
          </div>
          <div className="bar">
            <div id="postgres_inner" className="bar_inner">
              <div className="tag">PostgreSQL</div>
            </div>
          </div>
        </div>
      )}
      {displayFrontend && (
        <div className="language_section">
          <div className="bar">
            <div id="javascript_inner" className="bar_inner">
              <div className="tag">JavaScript</div>
            </div>
          </div>
          <div className="bar">
            <div id="react_inner" className="bar_inner">
              <div className="tag">React</div>
            </div>
          </div>
          <div className="bar">
            <div id="blazor_inner" className="bar_inner">
              <div className="tag">Blazor</div>
            </div>
          </div>
          <div className="bar">
            <div id="html_inner" className="bar_inner">
              <div className="tag">HTML</div>
            </div>
          </div>
          <div className="bar">
            <div id="css_inner" className="bar_inner">
              <div className="tag">CSS</div>
            </div>
          </div>
          <div className="bar">
            <div id="bootstrap_inner" className="bar_inner">
              <div className="tag">Bootstrap</div>
            </div>
          </div>
          <div className="bar">
            <div id="materialize_inner" className="bar_inner">
              <div className="tag">Materialize CSS</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TechStack;
