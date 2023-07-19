import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from '@mui/icons-material/Close';
import 'animate.css';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#132F4C",
  border: "2px solid #38BDF8",
  boxShadow: 24,
  p: 4,
  outline: 0,
  color: "#38BDF8",
  height: 200,
};

function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            <span id="nav-span">Ankit</span>.
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
               
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/project"
               
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
               
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skill"
               
                className="nav-links"
                onClick={handleClick}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <Button
                variant="outlined"
                className="contact-btn"
                onClick={handleOpen}
              >
                Contact me
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="animate__animated animate__rotateInDownRight"
              >
                <Box sx={style} className="contact-box">
                  <CloseIcon
                    onClick={handleClose}
                    className="closeicon"
                  ></CloseIcon>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Connect With Me:
                  </Typography>
                  <Typography id="modal-modal-description">
                    <a href="mailto:ankittyagi1398@gmail.com">
                      <MailOutlineIcon
                        sx={{
                          fontSize: "2.5rem",
                          margin: "20px",
                          cursor: "pointer",
                        }}
                        className="link-btn"
                      ></MailOutlineIcon>
                    </a>
                    <a href="http://">
                      <GitHubIcon
                        sx={{
                          fontSize: "2.5rem",
                          margin: "20px",
                          cursor: "pointer",
                        }}
                        className="link-btn"
                      ></GitHubIcon>
                    </a>
                    <a href="http://">
                      <InstagramIcon
                        sx={{
                          fontSize: "2.5rem",
                          margin: "20px",
                          cursor: "pointer",
                        }}
                        className="link-btn"
                      ></InstagramIcon>
                    </a>
                    <a href="http://">
                      <TwitterIcon
                        sx={{
                          fontSize: "2.5rem",
                          margin: "20px",
                          cursor: "pointer",
                        }}
                        className="link-btn"
                      ></TwitterIcon>
                    </a>
                    <a href="http://">
                      <FacebookIcon
                        sx={{
                          fontSize: "2.5rem",
                          margin: "20px",
                          cursor: "pointer",
                        }}
                        className="link-btn"
                      ></FacebookIcon>
                    </a>
                    <></>
                  </Typography>
                </Box>
              </Modal>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
