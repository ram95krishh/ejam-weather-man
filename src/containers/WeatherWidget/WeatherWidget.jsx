import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectors, operations } from '../../state/ducks/weather';
import { cities } from '../../utils/constants';
import AutoComplete from '../../components/AutoComplete';
import WeatherCard from '../../components/WeatherCard';

import './WeatherWidget.css';

class WeatherWidget extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: [] };
    this.handleOptionsChange = this.handleOptionsChange.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleOptionsChange(e, selected) {
    const { getWeatherByZipcodes } = this.props;
    const zipCodes = selected.map(city => city.zip);
    this.setState({ selected });
    getWeatherByZipcodes(zipCodes);
  }

  render() {
    const { selected } = this.state;
    const { scene, weather } = this.props;

    return (
      <div styleName="weatherWidget">
        <h3>Go ahead and select cities of your choice!</h3>
        <AutoComplete
          handleChange={this.handleOptionsChange}
          options={cities.data || []}
          selected={selected}
        />
        <div styleName="cardsArea">
          {selected.map(city => (
            <div styleName="weatherCard">
              <WeatherCard
                data={weather[city.zip]}
                scene={scene}
                title={city.name}
              />
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

WeatherWidget.defaultProps = {
  weather: {},
};

WeatherWidget.propTypes = {
  getWeatherByZipcodes: PropTypes.func.isRequired,
  scene: PropTypes.string.isRequired,
  weather: PropTypes.shape({
    [PropTypes.string]: PropTypes.shape({
      feelsLike: PropTypes.number,
      humidity: PropTypes.number,
      max: PropTypes.number,
      min: PropTypes.number,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
      temp: PropTypes.number,
    }),
  }),
};

const mapStateToProps = state => ({
  weather: selectors.getWeatherData(state),
});

const mapDispatchToProps = dispatch => ({
  getWeatherByZipcodes: operations.getWeatherByZipcodes(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
