import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'
// import { changeOwnedSetStatus } from '../actions/legoSetActions'
import { createOwnedSetEntry } from '../actions/ownedPartsActions'

const LegoSetCards = ({ legoSets, ownedSets, createOwnedSetEntry, loading }) =>{
  
    const handleLegoSetLoading = () => {
        return (loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{renderLegoSetCards()}</CardDeck>
    }

    const changeOwnedSetStatus = (legoSetId) => {
        console.log(legoSetId)
        console.log(!!ownedSets.find(set => set.legoSetId === legoSetId))
        return !!ownedSets.find(set => set.legoSetId === legoSetId) ? console.log("remove set") : createOwnedSetEntry(legoSetId)
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
    const { legoSets, loading, ownedSets } = state
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
            const ids = ownedSets.map(ownedSet => ownedSet.legoSetId)
            results = ids.map(id => legoSets.find(set => id === set.id))
            break;
        default:
            results = legoSets
    }

    return {
        legoSets: results,
        ownedSets,
        loading
    }
}

export default connect(mapStateToProps, { createOwnedSetEntry })(LegoSetCards)