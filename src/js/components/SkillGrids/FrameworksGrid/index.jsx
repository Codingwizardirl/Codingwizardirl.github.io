import React from 'react';
import Slider from 'react-slick';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import IconButton from 'material-ui/IconButton';

import {
  AndroidIcon,
  AngularIcon,
  ReactIcon,
  ReduxIcon,
} from '../../Icons';
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

const FrameworksGrid = () => (
  <div className="container">
    <Slider {...settings}>
      <div className="box"><ReactIcon /></div>
      <div className="box"><ReduxIcon /></div>
      <div className="box"><AndroidIcon /></div>
      <div className="box"><AngularIcon /></div>
    </Slider>
  </div>
);

export default FrameworksGrid;
