import React from 'react';
import Paper from 'material-ui/Paper';

import About from '../About';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TabSlider from '../TabSlider';


const Layout = (props) => (
  <div>
  <Paper zDepth={2}>
    <Header title="Pavel Georgiev" subtitle="Aspiring Software Developer" />
    <Navbar />
  </Paper>
  <Paper zDepth={1}>
    {props.children}
  </Paper>
    <Footer />
  </div>
  );
export default Layout;
