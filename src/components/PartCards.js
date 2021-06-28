import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'



const PartCards = props => {

    const handlePartAndPartSpecLoading = () => {
        return (props.loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{renderEachPartCard()}</CardDeck>
    }

    const renderEachPartCard = () => {
        return <div>Part Card Goes here</div>
    }

    return(
        <Container fluid className="container">
            {handlePartAndPartSpecLoading()}
        </Container>
    )
}

export default connect(({parts, setPartSpecs, loading})=>({parts, setPartSpecs, loading}))(PartCards)