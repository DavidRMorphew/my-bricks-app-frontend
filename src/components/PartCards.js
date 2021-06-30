import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import PartCard from './PartCard'

const PartCards = props => {
    const { parts, setPartSpecs, set } = props

    const handlePartAndPartSpecLoading = () => {
        return (!props.loading) ? <CardDeck>{renderEachPartCard()}</CardDeck> : <h4 className="over-background">LOADING...</h4>
    }

    const partQuantityOfPart = (part) => {
        const setPartSpecOfPart = setPartSpecs.find(setPartSpec => (setPartSpec.legoSetId === set.id && setPartSpec.partId === part.id))
        return setPartSpecOfPart.partQuantity
    }

    const renderEachPartCard = () => (
        parts.map(part => <PartCard key={`${set.id}—${part.id}`} part={part} partQuantity={partQuantityOfPart(part)}/>)
    )

    return(
        <Container fluid className="container">
            <h1 className="over-background">Parts of Set</h1>
            {handlePartAndPartSpecLoading()}
        </Container>
    )
}

export default connect(({parts, setPartSpecs, loading})=>({parts, setPartSpecs, loading}))(PartCards)