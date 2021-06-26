import Card from 'react-bootstrap/Card'

const LegoSetCard = props => {
    const set = props.legoSet

    const handleOnClick = e => {
        e.preventDefault()
        props.addToOwnedSets(set.id)
    }
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
                        <Card.Text>
                            Year: <strong>{set.year}</strong>
                            <br></br>
                            Theme: <strong>{set.themeName}</strong>
                            <br></br>
                            Total Bricks: <strong>{set.totalBricks}</strong>
                        </Card.Text>
                        <button onClick={handleOnClick}>Add To Owned</button>
                </Card.Body>
        </Card>
        </div>   
    )
}

export default LegoSetCard