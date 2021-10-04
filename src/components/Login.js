import Container from 'react-bootstrap/Container'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import { connect } from 'react-redux'
import { /* loginUser action */ } from '../actions/userActions'

const Register = ({ /* loginUser action */ }) => {

    let history = useHistory();

    const [formData, setFormData] = useState({ 
            email: '', 
            password: ''
        });
    
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formData)
        // login dispatch
        setFormData({
            email: '', 
            password: ''
        });
    }

    return(
        <Container fluid className="narrow-container over-background shaded-background">
            <br></br>
            <h1>Log In</h1>
            <br></br>
            <form className="form-font" onSubmit={handleSubmit}>
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
            <h3>or</h3>
            <button className="form-font" onClick={() => history.push('/register')}>Register</button>
            <br></br>
            <br></br>
        </ Container>
    )
}

export default connect(null, { /* loginUser action */ })(Register)