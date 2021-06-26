import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'

const LegoSetCards = props => {
    const handleLegoSetLoading = () => {
        return (props.loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{renderLegoSetCards()}</CardDeck>
    }

    const renderLegoSetCards = () => (
        props.legoSets.map(set => <LegoSetCard key={set.id} legoSet={set}/>)
    )

    return(
        <Container fluid className="container">
                <h1 className="over-background">Lego Sets!</h1>
                    {handleLegoSetLoading()}
        </Container>
    )
}

export default LegoSetCards