# ejam-weather-man

### Overview
A weather finder app built on ReactJS, as a part of an assignment for Ejam.
Deployed at https://ejam-weather-man.herokuapp.com/

## Features
- Gives weather data for the 50 capital cities of the United States
- Gets data from backend service hosted at http://ejam-weather-service.herokuapp.com
- Switch timezone to US to experience corresponding UI changes.
- Has a day/night mode that toggles automatically utilizing browser time.
- A placeholder splash screen is also included.

## Installation

Clone the repositiory into a folder and get into the folder

```
        $ git clone https://github.com/ram95krishh/ejam-weather-man.git
        $ cd ejam-weather-man
```

Now make sure node is installed, then run the following command

```
        $ npm i
```

Create .env files for environmental variables
```
        touch .env
```

After writing env values to .env...
Build step (for dev):
```
    npm run build:dev
```

Build step (for production)
```
    npm run build
```

Finally, run the app with the following command...
```
    npm start
```

The UI will now be up and available at http://localhost:8080

## Some key Libraries used in this project

- Material UI
- RamdaJS
- Noty (for notifications)
- Redux with ImmutableJS
- Redux-saga (middleware)