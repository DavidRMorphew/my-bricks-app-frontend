import LegoSetShowCard from './LegoSetShowCard'
import PartCards from './PartCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const LegoSetShowDisplay = props => {
    const {set, changeOwnedSetStatus} = props

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>        
            <Container fluid>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <LegoSetShowCard set={set} changeOwnedSetStatus={changeOwnedSetStatus}/>
            </Row>
            <Row>
                <PartCards set={set}/>
            </Row>
            </Container>
        </div>
    )
}

export default LegoSetShowDisplay