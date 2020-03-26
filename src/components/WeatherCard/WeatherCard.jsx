import React from 'react';
import {
  Avatar, Card, CardHeader,
  CardContent,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import './WeatherCard.css';

const timeFormat = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  timeZone: 'America/New_York',
};

const LoadingCard = ({ title, scene }) => (
  <Card styleName={`card_${scene}`}>
    <CardHeader
      avatar={(
        <Avatar aria-label="recipe">
          {title.slice(0, 1)}
        </Avatar>
      )}
      title={title}
    />
    <CardContent styleName={`cardContent ${scene}`}>
      Loading...
    </CardContent>
  </Card>
);

const WeatherCard = ({ title, data, scene }) => {
  if (!data) {
    return <LoadingCard scene={scene} title={title} />;
  }

  const {
    temp, humidity, sunrise, sunset,
    max, min, feelsLike, description,
    icon,
  } = data;

  const sunriseTime = new Date(sunrise * 1000).toLocaleString('en-US', timeFormat);
  const sunsetTime = new Date(sunset * 1000).toLocaleString('en-US', timeFormat);

  return (
    <Card styleName={`card_${scene}`}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe">
            {title.slice(0, 1)}
          </Avatar>
        )}
        styleName={scene}
        title={title}
      />
      <div styleName={`cardMedia ${scene}Card`}>
        <img alt={description} src={icon} />
      </div>
      <CardContent styleName={`cardContent ${scene}`}>
        <div styleName="row">
          <div styleName="data">Current Temp</div>
          <div>
            {temp}
            <span>
              &deg; F
            </span>
          </div>
        </div>
        <div styleName="row">
          <div styleName="data">Feels Like</div>
          <div>
            {feelsLike}
            <span>
              &deg; F
            </span>
          </div>
        </div>
        <div styleName="row">
          <div styleName="data">Today&apos;s max</div>
          <div>
            {max}
            <span>
              &deg; F
            </span>
          </div>
        </div>
        <div styleName="row">
          <div styleName="data">Today&apos;s min</div>
          <div>
            {min}
            <span>
              &deg; F
            </span>
          </div>
        </div>
        <div styleName="row">
          <div styleName="data">Humidity</div>
          <div>
            {`${humidity}%`}
          </div>
        </div>
        <div styleName="row">
          <div styleName="data">Sunrise</div>
          <div>
            {sunriseTime}
          </div>
        </div>
        <div styleName="row">
          <div styleName="data">Sunset</div>
          <div>
            {sunsetTime}
          </div>
        </div>
        <h3 styleName="description">
          {description}
        </h3>
      </CardContent>
    </Card>
  );
};

LoadingCard.propTypes = {
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

WeatherCard.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    feelsLike: PropTypes.number,
    humidity: PropTypes.number,
    icon: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    temp: PropTypes.number,
  }).isRequired,
  scene: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default WeatherCard;
