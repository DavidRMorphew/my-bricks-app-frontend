import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'
import PotentialBuildSetCard from './PotentialBuildSetCard'


const PotentialBuildSetsResults = props => {
    
    const handleLegoSetLoading = () => {
        if (props.loading) {
            return <h1 className="over-background">LOADING...Please wait, as this could take a few seconds...<br></br>Please do not change "owned sets" while we search.</h1> 
        } else if (props.potentialBuilds.length > 0) {
            return(
                    <div>
                        <h1 className="over-background">Potential Build Results: {props.potentialBuilds.length}</h1>
                        <CardDeck>{renderPotentialBuildCards()}</CardDeck>
                    </div>
                )
        }
    }

    const renderPotentialBuildCards = () => (
        props.potentialBuilds.map(potBuildSet => <PotentialBuildSetCard key={`Pot-build-${potBuildSet.id}`} set={potBuildSet}/>)
    )

    return(
        <Container fluid className="container">
            {handleLegoSetLoading()}
        </Container>
    )
}

export default connect(({potentialBuilds, loading})=>({potentialBuilds, loading}))(PotentialBuildSetsResults)