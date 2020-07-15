import "./style.css";
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const form = document.querySelector("form");
class Form {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: [false, false, false],
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  clearForm = () =>
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      errors: [false, false, false],
    });
  saveToState = (e) => {
    const state = { ...this.state, [e.target.name]: e.target.value };
    this.state = state;
    console.log(state, this.state);
  };
}

const App = () => {
  const form = new Form();
  name.addEventListener("input", form.saveToState);
  email.addEventListener("input", form.saveToState);
  phone.addEventListener("input", form.saveToState);
};
App();
