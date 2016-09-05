import React from 'react';
import { Link } from 'react-router';
import { TwitterIcon, GithubCircleIcon, LinkedinIcon } from '../Icons';
import styles from './styles.css';

const Footer = () => (
  <footer>
    <div className="icon-wrapper">
      <a href="https://uk.linkedin.com/in/pavelrgeorgiev" className="icons"><LinkedinIcon /></a>
      <a href="https://github.com/Codingwizardirl" className="icons"><GithubCircleIcon /></a>
      <a href="https://twitter.com/prgeorgiev" className="icons"><TwitterIcon /></a>
    </div>
    <div className="center">  © Pavel G. All rights reserved.</div>
  </footer>
);

export default Footer;
