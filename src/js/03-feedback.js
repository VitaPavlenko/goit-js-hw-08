import throttle from 'lodash.throttle'; 

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};

form.addEventListener('submit', onFormSubmit)
form.addEventListener('input',throttle(OnTextareaInput, 500));

populateTextarea();

function onFormSubmit(event) {
    event.preventDefault();  

    event.currentTarget.reset();

    localStorage.removeItem(LOCALSTORAGE_KEY);
}


function OnTextareaInput(event) {

    formData[event.target.name] = event.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    
}

function populateTextarea() {
    const massege = localStorage.getItem(LOCALSTORAGE_KEY);
    const parsedSettings = JSON.parse(massege);


    if (parsedSettings) {
        input.value = parsedSettings.email; 
        textarea.value = parsedSettings.message;
    }
    

}