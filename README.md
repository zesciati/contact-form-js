# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![Screenshot_30-6-2025_44111_judithjude369 github io](https://github.com/user-attachments/assets/0510f8c2-8b0f-4015-9cd9-46516390a0fa)

### Links

-  [Solution URL](https://github.com/JudithJude369/Contact-Form)
-  [Live Site URL](https://judithjude369.github.io/Contact-Form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
This project really thought me alot, especially in the aspect of using vanilla javascript to build projects. I learnt how to remove and add classList and also perform some styles in javascript for the active class. It helped me learn how to validate form using vanilla javascript.

```html
<article class="sucess-state">
      <div class="success-img">
        <img src="/images/icon-success-check.svg" alt="" />
        <p>Message Sent!</p>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </article>
```
```css
.container {
  max-width: 900px;
  width: 90%;
  border-radius: 5px;
  background-color: var(--White);
  box-shadow: 0 10px 15px -3px rgba(61, 8, 8, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 1.5rem 1rem;
  flex-direction: column;
}
```
```js
const validateEmail = () => {
  const value = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    emailError.textContent = "Please enter a valid email address";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
    return true;
  }
};
```

### Continued development

I hope to build more with vanilla Javascript, and hopefully improve my javascript knowledge and responsive design with CSS.

### Useful resources

- [FreeCodeCamp]https://www.freecodecamp.org/) - This freecodecamp fullstack curriculum is helping me understand Javascript.

## Author

- Frontend Mentor - [@JudithJude369](https://www.frontendmentor.io/profile/JudithJude369)
- Twitter - [@JudithJ08832378](https://x.com/JudithJ08832378)

## Acknowledgments
I would like to really acknowledge freecodecamp for making learning easy and resources accessible for everyone.
