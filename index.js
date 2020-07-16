import "./style.css";
import Form from "./src/Form";
const name = document.querySelector("input[name=name]");
const email = document.querySelector("input[name=email]");
const phone = document.querySelector("input[name=phone]");
const form = document.querySelector("form");


const App = () => {
  const formHandler = new Form();
  name.addEventListener("input", formHandler.saveToState);
  email.addEventListener("input", formHandler.saveToState);
  phone.addEventListener("input", formHandler.saveToState);
  form.addEventListener("submit", formHandler.handleSubmit);
};
window.onload = App();
window.onbeforeunload = ()=> {
    name.removeEventListener('input', form.saveToState);
    email.removeEventListener('input', form.saveToState);
    phone.removeEventListener('input', form.saveToState);
    form.removeEventListener("submit", formHandler.handleSubmit);
}