import React, {useState} from "react";
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    })

    const validate = () => {
        let tempErrors = {
            name: '',
            email: '',
            password: ''
        }

        if (!name) {
            tempErrors.name = "Name is required";
        }
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            tempErrors.email = "Invalid email format";
        }
        if (!password || password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }
        setErrors(tempErrors);
            return !tempErrors.name && !tempErrors.email && !tempErrors.password;
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email, password)
        if (validate()) {
            alert("Form submitted successfully!");
            setName("");
            setEmail("");
            setPassword("");
            setErrors({ name: "", email: "", password: "" });
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>React</h1>
                <label>Name: </label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                <br/><br/>

                <label>Email: </label>
                <input type='email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <br/><br/>

                <label>Password: </label>
                <input type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                <br/><br/>

                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form