import React from "react";
import { Link } from "react-router-dom";
import {AppBar, Container, Toolbar} from '@mui/material';
import HboMaxIcon from "../assets/hbomax-icon"
import "./header.scss";


const Header = props => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="header">
          <Link to="/" className="btn btn-secondary">
            <HboMaxIcon/>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
