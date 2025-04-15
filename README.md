# React Weather App

A responsive and interactive weather application built with React and Tailwind CSS as part of a web development course. It fetches real-time weather data and displays it in a clean, accessible user interface with dynamic styling and custom components.

---

## Live Demo

You can view the live version here: [Live Demo](https://precipitationstation.netlify.app/)

---

## Features

- Real-time weather data
- Multi-day forecast
- Search for weather by city name
- Geolocation support for local weather
- Fully responsive design
- Dynamic UI that adapts to different weather conditions
- Accessible components (keyboard-friendly, ARIA-labelled)

---

## Technologies Used

### Core

- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)

### Styling

- [Tailwind CSS](https://tailwindcss.com/)
- [Sass](https://sass-lang.com/)
- [Font Awesome](https://fontawesome.com/)

### API Intergration

- [Axios](https://axios-http.com/)

### Tooling

- [npm](https://www.npmjs.com/)
- [Prettier](https://prettier.io/)

---

## Usage

- Visit the [Live Demo](https://precipitationstation.netlify.app/).
- Search for a city to view the current weather and forecast
- Use the dropdown to reveal extended weather details (humidity, wind, etc.)
- Observe how the colour theme changes to reflect current weather conditions! 🌈

---

## API

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) and the [SheCodes Weather API](https://www.shecodes.io/weather) to fetch weather data.

---

## Future Improvements

- **Accordion accessibility:**  
  The accordion toggle currently uses a `<div>` element with `role="button"` and ARIA attributes to simulate button behaviour. This is due to semantic limitations, as HTML buttons cannot contain table elements, which are part of the accordion's content. Whilst the component supports keyboard interaction via the Enter and Space keys, this approach may not provide full accessibility across all screen readers and assistive technologies. A future improvement would be to enhance screen reader support and ensure WCAG compliance without breaking the semantic structure of the page.

- **Geolocation performance in Firefox:**  
  Firefox tends to take longer than Chrome to retrieve geolocation data, especially on initial page load. A potential enhancement could involve prompting the request earlier as the page loads or adding clearer loading feedback while the user’s location is being fetched.

- **Add screenshots to README to demo different themes**

- **Refactor code and improve comments:**  
  Some areas of the codebase could do with some light refactoring and clearer inline comments to improve readability.

- **Address depracated Sass functions:**  
  I need to replace some of the outdated Sass colour functions.

---

## License

This project is licensed under the [MIT License](LICENSE).
