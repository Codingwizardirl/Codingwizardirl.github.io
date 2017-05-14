import React from 'react';
import Paper from 'material-ui/Paper';

import About from '../About';
import Header from '../Header';
import Navbar from '../Navbar';
import ResumeButton from '../ResumeButton';
import Footer from '../Footer';
import TabSlider from '../TabSlider';


const Layout = (props) => (
  <div>
    <Paper zDepth={2}>
      <Header title="Pavel Georgiev"/>
      <Navbar />
    </Paper>
    <Paper zDepth={2}>
      {props.children}
    </Paper>
    <ResumeButton />
    <Footer />
  </div>
  );
export default Layout;
