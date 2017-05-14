import React from 'react';
import { IndexLink, Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import {
red500,
grey50,
} from 'material-ui/styles/colors';

import styles from './styles.css';

const Navbar = () => (
  <div className="navbar-wrapper">
    <IndexLink to="/" activeClassName="activated">
      <Avatar
        color={grey50}
        backgroundColor={red500}
        size={50}
        className="navbarAvatar"
        style={{ margin: '0 0.4em 0.4em 1em' }}
      >
        PG
      </Avatar>
    </IndexLink>

    <Link
      to="/skills"
      activeClassName="activated"
      style={{ textDecoration: 'none' }}
    >
      <span className="link">Skills</span>
    </Link>
    <a
      href="https://drive.google.com/file/d/0BziL3OnDZhW_enozZUZzRnBWdzQ/view?usp=sharing"
      target="_blank"
      className="link"
      rel="noreferrer noopener"
    >
    Resume
    </a>
    <a
      href="https://pavelgeorgiev.me/blog/"
      target="_blank"
      className="link"
      rel="noreferrer noopener"
    >
    Blog
    </a>

  </div>
);

export default Navbar;
