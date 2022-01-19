import React, { useState } from "react";

const Form = (props) => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        confirmpassword: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const lengthValidator = (input, length) => {
        if (input.length > length) {
            return true;
        } else {
            return false;
        }
    }

    const matching = () => {
        if (form.password = form.confirmpassword){
            return true;
        } else {
            return false;
        }
    }


const allValid = (inputs) => {
    return lengthValidator(inputs.firstname, 1)
        && lengthValidator(inputs.lastname, 1)
        && lengthValidator(inputs.email, 4)
        && lengthValidator(inputs.password, 7)
        && matching()
}

return (
    <div className="w-25 mx-auto">
        <form>

            <div className="form-group">
                <label htmlFor="firstname">First Name: </label>
                <input className="" name="firstname" type="text" onChange={onChangeHandler} />
                <span className="alert-danger">{!lengthValidator(form.firstname, 1) && form.firstname.length > 0 && "You must have at least two characters."}</span>
            </div>

            <div className="form-group">
                <label htmlFor="lastname">Last Name: </label>
                <input className="" name="lastname" type="text" onChange={onChangeHandler} />
                <span className="alert-danger">{!lengthValidator(form.lastname, 1) && form.lastname.length > 0 && "You must have at least two characters."}</span>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:  </label>
                <input className="" name="email" type="text" onChange={onChangeHandler} />
                <span className="alert-danger">{!lengthValidator(form.email, 4) && form.email.length > 0 && "You must have at least five characters."}</span>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input className="" name="password" type="text" onChange={onChangeHandler} />
                <span className="alert-danger">{!lengthValidator(form.password, 7) && form.password.length > 0 && "You must have at least five characters."}</span>
            </div>

            <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password: </label>
                <input className="" name="confirmpassword" type="text" onChange={onChangeHandler} />
                <span className="alert-danger">{!lengthValidator(form.confirmpassword) && "Password does not match that jank."} </span>
            </div>

            {
                allValid(form)
                    ? <input type="submit" className="btn btn-lg btn-success" />
                    : <input type="submit" className="btn btn-lg btn-success" disabled />
            }

        </form>
    </div>
)
        }

export default Form;