import React from "react";
import "./style.css";
import { Button, Navbar, Nav, FormControl, Image } from "react-bootstrap";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import BarChartIcon from "@material-ui/icons/BarChart";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import Avatar from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import CopyrightIcon from "@material-ui/icons/Copyright";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="navbar navbar-default fixed-top"
        bg="white"
      >
        <Navbar.Brand href="#home">
          <Image
            src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo.png"
            className="reddit-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Nav.Link className="pt-3 home-link">
              <HomeIcon className="icon home-icon" />
              <span className="home-text">Home</span>
            </Nav.Link>
            <Nav.Link href="#link" className="search-box">
              <div className="d-flex align-items-center search-box-container">
                <SearchIcon />
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 search-box-input"
                />
              </div>
            </Nav.Link>
            <Nav.Link className="icons-container pt-3">
              <TrendingUpIcon className="icon" />
              <BarChartIcon className="icon" />
              <EmailRoundedIcon className="icon mail-icon" />
              <MessageRoundedIcon className="icon" />
              <EditIcon className="icon" />
            </Nav.Link>
            <Nav.Link>
              <Button
                variant="outline-warning"
                className="get-coins-btn"
                size="sm"
              >
                <CopyrightIcon className="get-coins-icon" />
                <span className="get-coins-text">Get Coins</span>
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Avatar alt="A" src="/static/images/avatar/1.jpg" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
