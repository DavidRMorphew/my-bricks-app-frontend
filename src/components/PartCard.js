import Card from 'react-bootstrap/Card'

const PartCard = ({ part, partQuantity }) => (     
    <div>
        <Card className="my-4 border-dark card-deck-part-card" >
            <Card.Header as="h4">Part Number: {part.partNumber}</Card.Header>
            <Card.Img src={part.imageUrl} alt={`Part Image for ${part.name}`}/>
            <Card.Body>
                <Card.Text>
                    <strong>Part Name: </strong>{part.name}
                <br></br>
                    <strong>Part Color: </strong>{part.color}                    
                </Card.Text>
                <Card.Text>
                    <strong>Number in Set: </strong>{partQuantity}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
)

export default PartCard