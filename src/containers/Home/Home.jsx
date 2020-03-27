import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WeatherWidget from '../WeatherWidget';
import SplashScreen from '../../components/SplashScreen';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { splashScreen: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ splashScreen: false });
    }, 3000);
  }

  render() {
    const { splashScreen } = this.state;
    const { scene } = this.props;

    return (
      <div styleName="screenArea">
        {splashScreen ? <SplashScreen scene={scene} />
          : <WeatherWidget scene={scene} />
        }
      </div>
    );
  }
}

Home.propTypes = {
  scene: PropTypes.string.isRequired,
};

export default Home;
