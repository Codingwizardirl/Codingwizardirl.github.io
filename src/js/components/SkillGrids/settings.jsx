/*
  General settings for React Slick Slider
 */
import React from 'react';
import KeyboardArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import KeyboardArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import IconButton from 'material-ui/IconButton';

const PrevButton = ({ onClick }) => { // eslint-disable-line react/prop-types
  if (onClick) {
    return (
      <IconButton
        onClick={onClick}
        tooltip="Previous"
      >
        <KeyboardArrowLeft />
      </IconButton>
  );
  }
  return (
    <IconButton
      tooltip="Previous"
    >
      <KeyboardArrowLeft />
    </IconButton>
  );
};

const NextButton = ({ onClick }) => { // eslint-disable-line react/prop-types
  if (onClick) {
    return (
      <IconButton
        onClick={onClick}
        tooltip="Next"
      >
        <KeyboardArrowRight />
      </IconButton>
  );
  }
  return (
    <IconButton
      tooltip="Next"
    >
      <KeyboardArrowRight />
    </IconButton>
  );
};

const settings = {
  accessability: true,
  adaptiveHeight: true,
  className: 'center',
  dots: false,
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipe: true,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  variableWidth: true,
};

export default settings;
