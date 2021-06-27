import React, {Component} from "react"

class LegoSetShowContainer extends Component {



    render(){
        console.log(this.props.routeInfo.match.params.id)
        return(
            <div>Lego Set Show</div>
        )
    }
}

export default LegoSetShowContainer