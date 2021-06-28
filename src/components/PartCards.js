import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import PartCard from './PartCard'

const PartCards = props => {
    const { parts, setPartSpecs, set } = props

    const handlePartAndPartSpecLoading = () => {
        return (!props.loading) ? <CardDeck>{renderEachPartCard()}</CardDeck>
        : <h4 className="over-background">LOADING...</h4>
    }

    // <h1>Loaded</h1>

    const partsDidLoad = () => {
        const partCheck = parts.find(part => part.legoSetId === set.id)
        console.log(partCheck)
        console.log(parts)
        return !!partCheck ? true : false
    }
    
    const partSpecsDidLoad = () => {
        const partSpecCheck = setPartSpecs.find(setPartSpec => (setPartSpec.legoSetId === set.id))
        console.log(partSpecCheck)
        console.log(setPartSpecs)
        return !!partSpecCheck ? true : false
    }

    const renderEachPartCard = () => (
        // const setPartSpecsOfSet = setPartSpecs.filter(setPartSpec => setPartSpec.legoSetId === set.id)
        parts.map(part => {
            const setPartSpecOfPart = setPartSpecs.find(setPartSpec => (setPartSpec.legoSetId === set.id && setPartSpec.partId === part.id))
            console.log(setPartSpecs)
            console.log(setPartSpecOfPart)
            console.log(setPartSpecOfPart.partQuantity)

            return <PartCard key={part.id} part={part} partQuantity={setPartSpecOfPart.partQuantity}/>
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