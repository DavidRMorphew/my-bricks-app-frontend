import Card from 'react-bootstrap/Card'

const LegoSetShowCard = props => {
    const { set, changeOwnedSetStatus } = props

    const handleOnClick = e => {
        changeOwnedSetStatus(set.id)
    }

    const renderOwnedValue = () => {
        return !!set.owned ? "Owned" : "Not Owned"
    }

    const ownButtonDisplay = () => {
        return !!set.owned ? "Remove from Owned" : "Add to Owned"
    }

    const openInstructionsPageInNewTab = (instructionsUrl) => {
        const newTab = window.open(instructionsUrl, '_blank', 'noopener,noreferrer')
        if (newTab) {
            newTab.opener = null
        }
    }

    return(
        <Card className="my-4 border-dark set-show-card">
        <Card.Header as="h1">{ set.name }</Card.Header>
        <Card.Img src={ set.imageUrl } alt={`Set Image for ${set.name}`}/>
            <Card.Body>
                <Card.Text as="h2">
                    Year: <strong>{ set.year }</strong>
                </Card.Text>
                <Card.Text as="h2">
                    Theme: <strong>{ set.themeName }</strong>
                </Card.Text>
                <Card.Text as="h2">
                    Building Instructions:  
                        <button onClick={ () => openInstructionsPageInNewTab(set.instructionsUrl) }>
                            Click Here
                        </button>
                </Card.Text>   
                <Card.Text as="h2">
                    Total Bricks: <strong>{ set.totalBricks }</strong>
                </Card.Text>
                <Card.Text as="h2">
                    Owned: <strong>{ renderOwnedValue() }</strong>
                </Card.Text>
                <Card.Text as="h2">  
                    <button onClick={ handleOnClick }>{ ownButtonDisplay() }</button>
                </Card.Text>
                <Card.Text  as="h2">
                    <button>Add Note</button>
                </Card.Text>  
            </Card.Body>
        </Card>
    )
}

export default LegoSetShowCard