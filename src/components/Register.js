import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/userActions'

const Register = ({ registerUser }) => {

    const [formData, setFormData] = useState({
            name: '', 
            email: '', 
            password: ''
        });
    
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        // registerUser(formData)
        setFormData({
            name: '', 
            email: '', 
            password: ''
        });
    }

    return(
        <Container fluid className="narrow-container over-background shaded-background">
            <br></br>
            <form className="form-font" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </label>
                <br></br>
                <label>
                    Email:
                    <br></br>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </label>
                <br></br>
                <label>
                    Password:
                    <br></br>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                </label>
                <br></br>
                <br></br>
                <input type="submit" name="submit" value="Submit"/>
            </form>
            <br></br>
            <br></br>
        </ Container>
    )
}

export default connect(null, { registerUser })(Register)