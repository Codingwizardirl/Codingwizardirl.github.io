import React, { PropTypes } from 'react';
import  ReactRotatingText from 'react-rotating-text';
import styles from './styles.css';

const subtitles = ['Computer Science Student', 'Software Engineer'];

const Header = (props) => (
  <div className="wrapper">
    <div className="name"> {props.title} </div>
    <div className="subtitle"> <ReactRotatingText items={subtitles} pause={2500} /> </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
