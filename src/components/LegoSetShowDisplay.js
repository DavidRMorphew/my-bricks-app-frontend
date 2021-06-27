import Card from 'react-bootstrap/Card'

const LegoSetShowDisplay = props => {
    const {set} = props

    const renderOwnedValue = (set) => {
        return !!set.owned ? "Owned" : "Not Owned"
    }

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card 
                border="dark" 
                className="my-4"
                style={{ width: '80%' }}
            >
                <Card.Header as="h1">{set.name}</Card.Header>
                <Card.Img src={set.imageUrl}/>
                    <Card.Body>
                    <Card.Text as="h2">
                            Year: <strong>{set.year}</strong>
                    </Card.Text>
                    <Card.Text as="h2">
                        Theme: <strong>{set.themeName}</strong>
                    </Card.Text>
                    <Card.Text as="h2">
                        Building Instructions: 
                    </Card.Text>   
                    <Card.Text as="h2">
                        Total Bricks: <strong>{set.totalBricks}</strong>
                    </Card.Text>
                    <Card.Text as="h2">
                        Owned: <strong>{renderOwnedValue(set)}</strong>
                    </Card.Text>
                            
                            
                         
                            
                        
                        
                    </Card.Body>
            </Card>
        </div>
    )
}

export default LegoSetShowDisplay