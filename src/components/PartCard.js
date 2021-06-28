import Card from 'react-bootstrap/Card'

const PartCard = props => {
    const {part} = props
    return(
        <div>
            
        <Card border="dark" className="my-4" style={{ 
            width: '18rem',
            color: 'black' 
            }}>
            <Card.Img src={part.imageUrl}/>
            <Card.Body>
                <Card.Text>
                    {props.partQuantity}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default PartCard