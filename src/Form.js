import React, {useState} from "react";
import './Form.css'

const Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    })

    const validate = () => {
        let tempErrors = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }

        if (!fname) {
            tempErrors.fname = "First Name is required";
        }
        if (!lname) {
            tempErrors.lname = "Last Name is required";
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
            return !tempErrors.fname && !tempErrors.lname && !tempErrors.email && !tempErrors.password;
        }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(fname, lname, email, password)
        if (validate()) {
            alert("Form submitted successfully!");
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
            setErrors({ fname: "", lname: "", email: "", password: "" });
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>React</h1>
                <label>First Name: </label>
                <input type='text' value={fname} onChange={(event) => setFname(event.target.value)}/>
                {errors.fname && <p style={{ color: "red" }}>{errors.fname}</p>}
                <br/><br/>

                <label>Last Name: </label>
                <input type='text' value={lname} onChange={(event) => setLname(event.target.value)}/>
                {errors.lname && <p style={{ color: "red" }}>{errors.lname}</p>}
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