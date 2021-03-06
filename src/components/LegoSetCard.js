import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

const LegoSetCard = ({legoSet, changeOwnedSetStatus}) => {
    
    const handleOnClick = e => {
        changeOwnedSetStatus(legoSet.id)
    }

    const renderOwnedValue = (legoSet) => {
        return !!legoSet.owned ? "Owned" : "Not Owned"
    }

    const ownButtonDisplay = (legoSet) => {
        return !!legoSet.owned ? "Remove from Owned" : "Add to Owned"
    }

    return(
        <div>
        <Card className="my-4 border-dark card-deck-set-card" >
            <Card.Header as="h4"><Link to={`/lego_sets/${legoSet.id}`}>{legoSet.name}</Link></Card.Header>
            <Card.Img src={legoSet.imageUrl} alt={`Set Image for ${legoSet.name}`}/>
                <Card.Body>
                    <Card.Title><strong>{legoSet.setNumber}</strong></Card.Title>
                        <Card.Text>
                            Year: <strong>{legoSet.year}</strong>
                            <br></br>
                            Theme: <strong>{legoSet.themeName}</strong>
                            <br></br>
                            Total Bricks: <strong>{legoSet.totalBricks}</strong>
                            <br></br>
                            Owned: <strong>{renderOwnedValue(legoSet)}</strong>
                        </Card.Text>
                        <button onClick={handleOnClick}>{ownButtonDisplay(legoSet)}</button>
                </Card.Body>
        </Card>
        </div>   
    )
}

export default LegoSetCard