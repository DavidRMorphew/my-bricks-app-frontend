import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom";

const PotentialBuildSetCard = ({ set }) => (
    <div>
        <Card className="my-4 border-dark card-deck-set-card" >
        <Card.Header as="h4"><Link to={`/lego_sets/${set.id}`}>{set.name}</Link></Card.Header>
        <Card.Img src={set.imageUrl}/>
            <Card.Body>
                <Card.Title><strong>{set.setNumber}</strong></Card.Title>
                    <Card.Text>
                        Year: <strong>{set.year}</strong>
                        <br></br>
                        Theme: <strong>{set.themeName}</strong>
                        <br></br>
                        Total Bricks: <strong>{set.totalBricks}</strong>
                        <br></br>
                    </Card.Text>
            </Card.Body>
        </Card>
    </div>
)


export default PotentialBuildSetCard