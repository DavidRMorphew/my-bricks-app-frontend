import Card from 'react-bootstrap/Card'

const PartCard = props => {
    const { part, partQuantity } = props
    return(
        <div>
            
        <Card border="dark" className="my-4" style={{ 
            width: '12rem',
            color: 'black' 
            }}>
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
}

export default PartCard