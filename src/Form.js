class Form {
	state = {
		name: "",
		email: "",
		phone: "",
		errors: [false, false, false],
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e)
		const {errors} = this.state;
		console.log(errors, 'errors');
		if(!!errors.includes(false)) {
			e.target.validity = false;
		errors.forEach((status, index) => {
			this.changeValidityStatus(e.srcElement[index], status);
		})
			
		}
			else{
				const {name, email, phone} = this.state;
				console.log(name, 'name');
				console.log(email, 'email');
				console.log(phone, 'phone');
				// const form = {name, email, phone};
				//await fetch('something',{
				// 	method: 'POST',
				// 	data: JSON.stringify(form);
				//   }
				// )
				this.clearForm();
		}
	};
	
clearForm = () =>
	  this.state = {
		  first_name: "",
		  last_name: "",
		  email: "",
		  password: "",
		  errors: [false, false, false],
	  }
	  

	saveToState = (e) =>  {
		console.log(e);
		const {value, name, id} = e.target;
		if(e.inputType === 'insertFromPaste') e.target.value = value.trim(); //удаляем пробелы при вставке строки с помощью ctrl + V
		const validity = this.checkValidity(value, name);
		const errors = this.state.errors;
		errors.splice(id, 1, validity);
		this.changeValidityStatus(e.target, validity);
		this.state = { ...this.state, [name]: value, errors };
		
	}
	

	
	changeValidityStatus = (target, validity) =>{
		console.log(target, validity);
	if(validity){
		target.classList.contains('invalid')? target.classList.replace('invalid', 'valid'): target.classList.add('valid');
	} else{
		target.classList.contains('valid')? target.classList.replace('valid', 'invalid'): target.classList.add('invalid');
	}
	}
	
	checkValidity = (target, name)=>{
		const regExp = {
			email: /^[a-z0-9]((\.|\+)?[a-z0-9]){5,}@g(oogle)?mail\.com$/,
			phone: /^((8|\+7|07)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d{2}\- ][\d{2}\- ]{7,11}$/,
			name: /([А-ЯЁ][а-яё]+[\-\s]?){3,}/
		}

		return regExp[name].test(target);
	}
}
export default Form;