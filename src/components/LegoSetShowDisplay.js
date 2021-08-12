import LegoSetShowCard from './LegoSetShowCard'
import PartCards from './PartCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const LegoSetShowDisplay = ({ set, changeOwnedSetStatus }) => (
    <div className="flex-center">        
        <Container fluid>
        <Row className="flex-center">
            <LegoSetShowCard set={ set } changeOwnedSetStatus={ changeOwnedSetStatus }/>
        </Row>
        <Row>
            <PartCards set={ set }/>
        </Row>
        </Container>
    </div>
)

export default LegoSetShowDisplay