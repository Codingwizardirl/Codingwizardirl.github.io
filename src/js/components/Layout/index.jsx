import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import TabSlider from '../TabSlider';
import Paper from 'material-ui/Paper';

const Layout = () => (
  <div>
  <Paper zDepth={3}>
    <Header title="Pavel Georgiev" subtitle="Aspiring Web Developer" />
    <TabSlider />
    <Footer />
  </Paper>
  </div>
  );
export default Layout;
