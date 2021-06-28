import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'

const PartCards = () => {
    return(
        <Container fluid className="container">
            <h1>Parts go here</h1>
        </Container>
    )
}

export default connect(({parts, setPartSpecs})=>({parts, setPartSpecs}))(PartCards)