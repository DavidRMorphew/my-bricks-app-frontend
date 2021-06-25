import Card from 'react-bootstrap/Card'

const LegoSetCard = props => {
    const set = props.legoSet
    return(
        <div>
        <Card border="dark" className="my-4" style={{ 
            width: '18rem',
            color: 'black' 
            }}>
            <Card.Header as="h4">{set.name}</Card.Header>
            <Card.Img src={set.imageUrl}/>
                <Card.Body>
                    <Card.Title><strong>{set.setNumber}</strong></Card.Title>
                    <Card.Subtitle>{set.year}</Card.Subtitle>
                        <Card.Text>
                            Total Bricks: {set.totalBricks}
                        </Card.Text>
                </Card.Body>
        </Card>
        </div>   
    )
}

export default LegoSetCard