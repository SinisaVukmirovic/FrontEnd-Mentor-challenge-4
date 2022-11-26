# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![Screenshot](./screenshot.png)

### Links

- Solution URL: [Solution code](https://github.com/SinisaVukmirovic/FrontEnd-Mentor-challenge-4)
- Live Site URL: [Live DEMO](https://sinisavukmirovic.github.io/FrontEnd-Mentor-challenge-4/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript
- Mobile-first workflow

### What I learned

- Learned how to have multiple background images + linear linear gradient

<code><pre>
  body {
    background-image: url('../images/pattern-hills.svg'), 
                      url('../images/bg-stars.svg'), 
                      linear-gradient(to bottom, 
                            var(--mostly-black-blue), 
                            var(--Very-dark-blue),
                            hsl(271, 23%, 18%, 1));
    background-repeat: no-repeat, no-repeat;
    background-position: 87% 95%, top;
    background-size: 250%, auto, auto;
  }
</pre></code>

- Learned how to change color of various parts of the SVG when hovered

<code><pre>
  #Main svg:hover {
      fill: #fce57e;
  }

  #Main svg:hover path {
      fill: #fce57e;
  }

  #Main svg:hover plygon {
      fill: #fce57e;
  }

  #Main svg:hover circle {
      fill: #fce57e;
  }
</pre></code>

- JS Date() object and methods on it

### Useful resources

- [Multiple background images](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds) - This helped me for using multiple background images with linear gradient. 
- [Changing color of SVG](https://stackoverflow.com/questions/19157122/css-change-fill-color-on-hover-svg-path) - How to change color of different parts of SVG when hovered
- [JS Date() object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) - Methods on JS Date() object

## Author

- Website - [Sinisa Vukmirovic](https://github.com/SinisaVukmirovic)
- Frontend Mentor - [@SinisaVukmirovic](https://www.frontendmentor.io/profile/SinisaVukmirovic)
- Twitter - [@sajtowski](https://twitter.com/sajtowski)