import React from 'react';
import Avatar from 'material-ui/Avatar';

import styles from './styles.css';


const About = () => (
  <div>
    <h2 className="headline center">Who am I?</h2>
    <div className="grid-container">
      <Avatar
        src="https://i.imgur.com/7YqXKGt.jpg"
        size={250}
        className="avatar"
      />
      <div className="text">
      Hello, my name is Pavel Georgiev. I am a student, problem solver and software content creator.
        I am currently pursuing Computer Science degree at the University of Edinburgh.
        <br />
         I enjoy playing around with code and observing the aftermath of that.
         Recently, I've been mainly working on web and mobile apps.
        <br />
         I am inspired by new technology and innovations.
        <br />
         If you have any question don't hesitate to
          <a href="mailto:hello@pavelgeorgiev.me" className="highlighted"> contact me.</a>
      </div>
    </div>
  </div>
);

export default About;
