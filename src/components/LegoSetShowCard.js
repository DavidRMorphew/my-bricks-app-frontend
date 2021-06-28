import Card from 'react-bootstrap/Card'

const LegoSetShowCard = props => {
    const {set} = props

    const handleOnClick = e => {
        props.changeOwnedSetStatus(set.id)
    }

    const renderOwnedValue = (set) => {
        return !!set.owned ? "Owned" : "Not Owned"
    }

    const ownButtonDisplay = (set) => {
        return !!set.owned ? "Remove from Owned" : "Add to Owned"
    }

    const openInstructionsPageInNewTab = (instructionsUrl) => {
        const newTab = window.open(instructionsUrl, '_blank', 'noopener,noreferrer')
        if (newTab) {
            newTab.opener = null
        }
    }

    return(
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
                        <button onClick={() => openInstructionsPageInNewTab(set.instructionsUrl)}>
                            Click Here
                        </button>
                </Card.Text>   
                <Card.Text as="h2">
                    Total Bricks: <strong>{set.totalBricks}</strong>
                </Card.Text>
                <Card.Text as="h2">
                    Owned: <strong>{renderOwnedValue(set)}</strong>
                </Card.Text>  
                <button onClick={handleOnClick}>{ownButtonDisplay(set)}</button>
            </Card.Body>
    </Card>
    )
}

export default LegoSetShowCard