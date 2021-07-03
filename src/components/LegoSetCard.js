import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

const LegoSetCard = props => {
    const set = props.legoSet

    const handleOnClick = e => {
        props.changeOwnedSetStatus(set.id)
    }

    const renderOwnedValue = (set) => {
        return !!set.owned ? "Owned" : "Not Owned"
    }

    const ownButtonDisplay = (set) => {
        return !!set.owned ? "Remove from Owned" : "Add to Owned"
    }

    return(
        <div>
        <Card className="my-4 border-dark card-deck-set-card" >
            <Card.Header as="h4"><Link to={`/lego_sets/${set.id}`}>{set.name}</Link></Card.Header>
            <Card.Img src={set.imageUrl} alt={`Set Image for ${set.name}`}/>
                <Card.Body>
                    <Card.Title><strong>{set.setNumber}</strong></Card.Title>
                        <Card.Text>
                            Year: <strong>{set.year}</strong>
                            <br></br>
                            Theme: <strong>{set.themeName}</strong>
                            <br></br>
                            Total Bricks: <strong>{set.totalBricks}</strong>
                            <br></br>
                            Owned: <strong>{renderOwnedValue(set)}</strong>
                        </Card.Text>
                        <button onClick={handleOnClick}>{ownButtonDisplay(set)}</button>
                </Card.Body>
        </Card>
        </div>   
    )
}

export default LegoSetCard