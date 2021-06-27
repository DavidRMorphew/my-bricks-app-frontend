import React, {Component} from "react"
import { connect } from 'react-redux'
import NotFoundErrorDisplay from '../components/NotFoundErrorDisplay'

class LegoSetShowContainer extends Component {

    
    findLegoSet = legoSetId => {
        const legoSet = this.props.legoSets.find(set => set.id === legoSetId)
        if (legoSetId && legoSet) {
            return <div className="over-background">{legoSet.name}</div>
        } else {
            return <NotFoundErrorDisplay />
        }
    }

    render(){
        const legoSetId = parseInt(this.props.routeInfo.match.params.id)
        return(
            <div>
                Lego Set Show
                {this.findLegoSet(legoSetId)}
            </div>
        )
    }
}

export default connect(({legoSets, loading})=>({legoSets, loading}))(LegoSetShowContainer)