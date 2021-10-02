import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({name: '', email: '', password: ''});
    
    const handleChange = e => {
        setFormData({[e.target.name]: e.target.value})
    }

    return(
        <Container fluid className="narrow-container over-background shaded-background">
            <br></br>
            <form className="form-font">
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <br></br>
                <label>
                    Email:
                    <br></br>
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
                <br></br>
                <label>
                    Password:
                    <br></br>
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </label>
            </form>
            <br></br>
            <br></br>
        </ Container>
    )
}

export default Register