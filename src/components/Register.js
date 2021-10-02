import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({name: '', email: '', password: ''});
    
    const handleChange = e => {
        setFormData({[e.target.name]: e.target.value})
    }

    return(
        <Container fluid className="container over-background shaded-background">
            <form>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
            </form>
        </ Container>
    )
}

export default Register