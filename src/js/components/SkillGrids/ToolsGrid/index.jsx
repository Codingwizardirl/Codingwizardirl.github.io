import React from 'react';
import Slider from 'react-slick';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import IconButton from 'material-ui/IconButton';

import { AtomIcon, GithubIcon, LinuxIcon, MongodbIcon, PostgresqlIcon } from '../../Icons';
import styles from '../styles.css';


const PrevButton = ({ onClick }) => ( // eslint-disable-line react/prop-types
  <IconButton
    onClick={onClick}
    tooltip="Previous"
  >
    <KeyboardArrowLeft />
  </IconButton>
);

const NextButton = ({ onClick }) => ( // eslint-disable-line react/prop-types
  <IconButton
    onClick={onClick}
    tooltip="Next"
  >
    <KeyboardArrowRight />
  </IconButton>
);


const settings = {
  accessability: true,
  adaptiveHeight: true,
  className: 'slides',
  dots: false,
  draggable: true,
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipe: true,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    },
  },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }],
  variableWidth: true,
};

const ToolsGrid = () => (
  <div className="container">
    <Slider {...settings}>
      <div className="box"><GithubIcon /></div>
      <div className="box"><AtomIcon /></div>
      <div className="box"><MongodbIcon /></div>
      <div className="box"><PostgresqlIcon /></div>
      <div className="box"><LinuxIcon /></div>
    </Slider>
  </div>
);

export default ToolsGrid;
