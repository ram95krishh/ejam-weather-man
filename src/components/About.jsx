import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <p>
        A weather finder app built on ReactJS, as a part of an assignment for Ejam.
        <br />
        Deployed at &nbsp;
        <a href="https://ejam-weather-man.herokuapp.com">
          https://ejam-weather-man.herokuapp.com
        </a>
        <br />
        <br />
        <h3>Features</h3>
        <ul>
          <li>
            Gives weather data for the 50 capital cities of the United States
          </li>
          <li>
            Gets data from backend service hosted at http://ejam-weather-service.herokuapp.com
          </li>
          <li>
            Switch timezone to US to experience corresponding UI changes.
          </li>
          <li>
            Has a day/night mode that toggles automatically utilizing browser time.
          </li>
          <li>
            A placeholder splash screen is also included.
          </li>
        </ul>
      </p>
    );
  }
}

export default About;
