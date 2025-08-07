// ubah ke # karena id
const form = document.querySelector("form");
const firstName = document.querySelector('#firstnameInput');
const lastName = document.querySelector('#lastnameInput');
const email = document.querySelector('#emailInput');
const message = document.querySelector('#messageInput');
const queryType = document.querySelector('input[name="query"]:checked');

// error
const firstNameError = firstName.nextElementSibling;
const lastNameError = lastName.nextElementSibling;
const emailError = email.nextElementSibling;
const messageError = message.nextElementSibling;

// success
const successState = document.querySelector(".sucess-state");

// firstName logic
const validateFirstName = () => {
  const value = firstName.value.trim();
  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
  if (!namePattern.test(value) || value === "") {
    firstNameError.textContent = "Please enter a valid name";
    firstNameError.style.display = "block";
    return false;
  } else {
    firstNameError.textContent = "";
    firstNameError.style.display = "none";
    return true;
  }
};

// lastName logic
const validateLastName = () => {
  const value = lastName.value.trim();
  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

  if (!namePattern.test(value) || value === "") {
    lastNameError.textContent = " Please enter a valid name ";
    lastNameError.style.display = "block";
    return false;
  } else {
    lastNameError.textContent = "";
    lastNameError.style.display = "none";
    return true;
  }
};

// email logic
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

// message logic
const validateMessage = () => {
  const value = message.value.trim();
  if (value === "") {
    messageError.textContent = " This field is required ";
    messageError.style.display = "block";
    return false;
  } else {
    messageError.textContent = "";
    messageError.style.display = "none";
    return true;
  }
};

// live validation
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
message.addEventListener("input", validateMessage);

// form submit
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  //disable all form interfaces

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isFirstNameValid && isLastNameValid && isEmailValid && isMessageValid) {

    const api = await fetch('http://localhost:8045/items/form_contact',{
      method:"POST",
      headers:{
        Authorization:"Bearer 2RKrXK3X9ntyBZX3tesRiXW_YCnhzs2e"
      },
      body:{
        "first_name": firstName ,
        "last_name": lastName,
        "email": "bobi123@gmail.com",
        "message":"Hello my name is Bobi saputra living in indonesia",
        "query_type" : "request"
    }
    });

    if(api.ok){
      successState.style.display = "block";
      form.reset();

      setTimeout(() => {
        successState.style.display = "none";
      }, 3000);
    }
    
  }
});
