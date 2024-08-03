import { useEffect, useState } from "react";
import $ from "jquery";
import "jquery.scrollbar";
import "jquery.scrollbar/jquery.scrollbar.css";
import "../assets/dashboard/css/ready.css";
import "../assets/dashboard/css/demo.css";
import FileUploadScreen from "./FileUpload";
import AuthorizeDrawingScreen from "./AuthorizeDrawings";
import AuthorizeSigneesScreen from "./AuthorizeSignees";
import ProgressTracking from "./ProgressTracking";
import SavedDocumentsScreen from "./SavedDocuments";
// import { FaClipboard } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { IoCloudUpload } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import { PopupMenu } from "react-simple-widgets";
import "../assets/dashboard/sass/styles.scss";
import Header from "../components/Header";
// import Notifications from "../components/Nofications";
import DropdownMenu from "../components/Nofications";
import { CgProfile } from "react-icons/cg";


const Dashboard = () => {
  const [screen, setScreen] = useState("upload");


  useEffect(() => {

    $(".scrollbar-inner").scrollbar();

    let toggle_sidebar = false,
      toggle_topbar = false,
      nav_open = 0,
      topbar_open = 0;

    if (!toggle_sidebar) {
      const $toggle = $(".sidenav-toggler");

      $toggle.click(function () {
        if (nav_open === 1) {
          $("html").removeClass("nav_open");
          $toggle.removeClass("toggled");
          nav_open = 0;
        } else {
          $("html").addClass("nav_open");
          $toggle.addClass("toggled");
          nav_open = 1;
        }
      });
      toggle_sidebar = true;
    }

    if (!toggle_topbar) {
      const $topbar = $(".topbar-toggler");

      $topbar.click(function () {
        if (topbar_open === 1) {
          $("html").removeClass("topbar_open");
          $topbar.removeClass("toggled");
          topbar_open = 0;
        } else {
          $("html").addClass("topbar_open");
          $topbar.addClass("toggled");
          topbar_open = 1;
        }
      });
      toggle_topbar = true;
    }

    $('[data-select="checkbox"]').change(function () {
      const $target = $(this).attr("data-target");
      $($target).prop("checked", $(this).prop("checked"));
    });
  }, []);

  const getIconColor = (currentScreen) => {
    return screen === currentScreen ? "skyblue" : "grey";
  };

  return (
    <div className="wrapper">
      <div className="main-header">
        <div className="logo-header">
          <img src="/src/assets/Kairotic_M_Logo.png" alt="Kairotic M Logo" />
          {/* frontend\src\assets\Kairotic_M_Logo.png */}
          <button
            className="navbar-toggler sidenav-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="collapse"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="topbar-toggler more">
          <CgProfile />
          </button>
        </div>
        <nav className="navbar navbar-header navbar-expand-lg z-0">
          <div className="container-fluid justify-content-end">
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center ">
              <DropdownMenu />
              <Header />
            </ul>
          </div>
        </nav>
      </div>
    <div className="sidebar">
        <div className="scrollbar-inner sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src="../assets/dashboard/css/img/profile.jpg" />
            </div>
            <div className="info">
              
            </div>
          </div>
          <ul className="nav">
            <li className={`nav-item ${screen === "upload" ? "active" : ""}`}>
              <a onClick={() => setScreen("upload")}>
                <IoCloudUpload
                  size={20}
                  className="mx-2"
                  color={getIconColor("upload")}
                />
                <p>Upload</p>
                <span className="badge badge-count">5</span>
              </a>
            </li>
            <li className={`nav-item ${screen === "saved" ? "active" : ""}`}>
              <a onClick={() => setScreen("saved")}>
                <IoIosSave
                  size={20}
                  className="mx-2"
                  color={getIconColor("saved")}
                />
                <p>Saved</p>
                <span className="badge badge-count">14</span>
              </a>
            </li>
            <li className={`nav-item ${screen === "signee" ? "active" : ""}`}>
              <a onClick={() => setScreen("signee")}>
                <FaFileSignature
                  size={20}
                  className="mx-2"
                  color={getIconColor("signee")}
                />
                <p>Authorize Signees</p>
                <span className="badge badge-count">50</span>
              </a>
            </li>
            <li className={`nav-item ${screen === "drawing" ? "active" : ""}`}>
              <a onClick={() => setScreen("drawing")}>
                <MdPeople
                  size={20}
                  className="mx-2"
                  color={getIconColor("drawing")}
                />
                <p>Authorize Drawings</p>
                <span className="badge badge-count">6</span>
              </a>
            </li>
            <li className={`nav-item ${screen === "progress" ? "active" : ""}`}>
              <a onClick={() => setScreen("progress")}>
                <FaCalendarDay
                  size={20}
                  className="mx-2"
                  color={getIconColor("progress")}
                />
                <p>Progress Tracking</p>
                <span className="badge badge-success">3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-panel" style={{zIndex: -5}}>
        <div className="content">
          {screen === "upload" ? (
            <FileUploadScreen />
          ) : screen === "saved" ? (
            <SavedDocumentsScreen />
          ) : screen === "signee" ? (
            <AuthorizeSigneesScreen />
          ) : screen === "drawing" ? (
            <AuthorizeDrawingScreen />
          ) : (
            <ProgressTracking />
          )}
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <nav className="pull-left">
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link" href="http://www.themekita.com">
                    ThemeKita
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Help
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://themewagon.com/license/#free-item"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright ml-auto">
              2018, made with <i className="la la-heart heart text-danger"></i>{" "}
              by <a href="http://www.themekita.com">ThemeKita</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
