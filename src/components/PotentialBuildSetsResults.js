import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'


const PotentialBuildSetsResults = props => {
    
    const handleLegoSetLoading = () => {
        if (props.loading) {
            return <h4 className="over-background">LOADING...Please wait, as this could take a few seconds...</h4> 
        } else {
            return(
                    <div>
                        <h1 className="over-background">Potential Build Results: {props.potentialBuilds.length}</h1>
                    </div>
                )
        }
    }

    return(
        <Container fluid className="container">
            {handleLegoSetLoading()}
        </Container>
    )
}

export default connect(({potentialBuilds, loading})=>({potentialBuilds, loading}))(PotentialBuildSetsResults)