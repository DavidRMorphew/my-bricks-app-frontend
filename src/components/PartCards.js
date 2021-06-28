import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import PartCard from './PartCard'


const PartCards = props => {
    const { parts, setPartSpecs, set } = props

    const handlePartAndPartSpecLoading = () => {
        return (props.loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{renderEachPartCard()}</CardDeck>
    }

    const renderEachPartCard = () => (
        // const setPartSpecsOfSet = setPartSpecs.filter(setPartSpec => setPartSpec.legoSetId === set.id)
        parts.map(part => {
            const setPartSpecOfPart = setPartSpecs.find(setPartSpec => (setPartSpec.legoSetId === set.id && setPartSpec.partId === part.id))
            const partQuantity = setPartSpecOfPart.partQuantity
            return <PartCard part={part} partQuantity={partQuantity}/>
        })
    )

    return(
        <Container fluid className="container">
            <h1 className="over-background">Parts of Set</h1>
            {handlePartAndPartSpecLoading()}
        </Container>
    )
}

export default connect(({parts, setPartSpecs, loading})=>({parts, setPartSpecs, loading}))(PartCards)