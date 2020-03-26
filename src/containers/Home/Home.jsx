import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherWidget from '../WeatherWidget';

import SplashScreen from '../../components/SplashScreen/SplashScreen';

import './Home.css';

const hours = new Date().getHours();
const scene = (hours < 18 && hours > 5) ? 'day' : 'night';

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
    return (
      <div styleName="screenArea">
        {splashScreen ? <SplashScreen scene={scene} />
          : <WeatherWidget scene={scene} />
        }
      </div>
    );
  }
}

const mapDispatchToProps = () => ({
});

Home.propTypes = {
};

export default connect(null, mapDispatchToProps)(Home);
