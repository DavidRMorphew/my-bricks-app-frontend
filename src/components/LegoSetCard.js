import Card from 'react-bootstrap/Card'

const LegoSetCard = props => {
    const set = props.legoSet
    return(
        <div key={set.id}>
            <Card  border="dark" style={{ 
                    width: '18rem',
                    background: 'aqua',
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