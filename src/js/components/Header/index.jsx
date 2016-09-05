import React, { PropTypes } from 'react';
import styles from './styles.css';

const Header = (props) => (
  <div className="wrapper">
    <div className="name"> {props.title} </div>
    <div className="subtitle"> {props.subtitle} </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
