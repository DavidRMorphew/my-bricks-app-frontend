import Card from 'react-bootstrap/Card'

const PartCard = props => {
    const {part, partQuantity} = props
    return(
        <div>
        <Card border="dark" className="my-4" style={{ 
            width: '18rem',
            color: 'black' 
            }}>
            <Card.Img src={part.imageUrl}/>
            <Card.body>
                <Card.text>
                    {partQuantity}
                </Card.text>
            </Card.body>
        </Card>
        </div>
    )
}

export default PartCard