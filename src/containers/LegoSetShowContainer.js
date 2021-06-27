import React, {Component} from "react"

class LegoSetShowContainer extends Component {

    
    render(){
        const legoSetId = this.props.routeInfo.match.params.id
        console.log(legoSetId)
        return(
            <div>
                Lego Set Show
                
            </div>
        )
    }
}

export default LegoSetShowContainer