import React, { PropTypes } from 'react';
import styles from './styles.css';
import Paper from 'material-ui/Paper';

const Header = (props) =>
  (<Paper className="wrapper" zDepth={3}>
    <div className="name"> {props.title} </div>
    <div className="subtitle"> {props.subtitle} </div>
  </Paper>
  );

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
