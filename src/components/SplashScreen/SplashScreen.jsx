import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

import './SplashScreen.css';
import nightLoader from '../../assets/animations/night-loader.json';
import dayLoader from '../../assets/animations/day-loader.json';

const defaultOptions = (scene) => {
  const animationData = scene === 'day' ? dayLoader : nightLoader;
  return {
    animationData,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
};

const SplashScreen = ({ scene }) => (
  <div styleName="splashScreen">
    <div styleName="titleArea">
      <h1 styleName="title">
        Weather updates in 3, 2, 1...
      </h1>
    </div>
    <div>
      <Lottie
        height={200}
        options={defaultOptions(scene)}
        width={200}
      />
    </div>
  </div>
);

SplashScreen.propTypes = {
  scene: PropTypes.string.isRequired,
};

export default SplashScreen;
