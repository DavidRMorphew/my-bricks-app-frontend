import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'
import { changeOwnedSetStatus } from '../actions/legoSetActions'

const LegoSetCards = ({ legoSets, loading, changeOwnedSetStatus }) =>{
  
    const handleLegoSetLoading = () => {
        return (loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{renderLegoSetCards()}</CardDeck>
    }

    const renderLegoSetCards = () => (
        legoSets.map(set => <LegoSetCard key={set.id} legoSet={set} changeOwnedSetStatus={changeOwnedSetStatus}/>)
    )
           
    return(
        <Container fluid className="container">
                <h1 className="over-background">Lego Sets: {legoSets.length}</h1>
                    {handleLegoSetLoading()}
        </Container>
    )
}

const mapStateToProps = (state, ownProps) => {
    const { legoSets, loading } = state
    const { filterTerm, subSetTerm } = ownProps

    let results
    switch (true){
        case (!!filterTerm):
            results = legoSets.filter(set => {
                const regex = new RegExp(filterTerm, 'i')
                return (regex.test(set.name) || regex.test(set.themeName) || regex.test(set.setNumber))
            })
            break;
        case (!!subSetTerm):
            results = legoSets.filter(set => !!set.owned)
            break;
        default:
            results = legoSets
    }

    return {
        legoSets: results,
        loading
    }
}

export default connect(mapStateToProps, { changeOwnedSetStatus })(LegoSetCards)