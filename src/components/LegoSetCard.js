import Card from 'react-bootstrap/Card'

const LegoSetCard = props => {
    console.log(props.legoSet)
    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={props.legoSet.imageUrl}/>
                <Card.Body>
                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default LegoSetCard