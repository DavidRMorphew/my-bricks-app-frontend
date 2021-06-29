import { connect } from "react-redux"
import { fetchPotentialBuilds } from "../actions/potentialBuildActions"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const PotentialBuildSelection = props => {
    return(
        <Container fluid className="container over-background" style={{backgroundColor: "rgba(0,0,0,0.7)"}}>
                <br></br>
                <br></br>
            <h1>Potential Builds</h1>
            <h2>Find Out What You can Build With What You Own!</h2>
                <br></br>
            <h4>We'll find all the sets in our database that you can build based on all of the parts you already own.</h4>
                <br></br>
            <h1>HOW IT WORKS:</h1>
            <h4>Lego sets' parts are filtered for matching, excluding: </h4>
                <h5>Minifigures and Figures,</h5> <h5>Accessories,</h5> <h5>Non-lego parts</h5>
                <br></br>
            <h4>Then we add up how many you have of each part and how many you need for each set to determine matches.</h4>
                <br></br>
            <h1>Please Choose Below:</h1>
            <h4>You have the option of finding matches regardless of part colors (Option 1) or with strict part matching by color (Option 2)</h4>
            <Row>
                <Col>
                    <h2>Option 1 (Regardless of Color)</h2>
                    <button onClick={() => props.fetchPotentialBuilds("notStrict")}>Find Potential Builds</button>
                </Col>
                <Col>
                    <h2>Option 2 (Strict Color Matching)</h2>
                    <h3></h3>
                    <button onClick={() => props.fetchPotentialBuilds("strict")}>Find Potential Builds (strict color matching)</button>
                </Col>
            </Row>
            <br></br>
        </Container>
    )
}

export default connect(({legoSets, loading, potentialBuilds})=>({legoSets, loading, potentialBuilds}), {fetchPotentialBuilds})(PotentialBuildSelection)