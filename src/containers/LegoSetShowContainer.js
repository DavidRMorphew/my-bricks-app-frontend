import React, {Component} from "react"
import { connect } from 'react-redux'
import { changeOwnedSetStatus } from '../actions/legoSetActions'
import { fetchSetPartSpecs } from "../actions/setPartSpecsActions"
import { fetchPartsOfSet } from "../actions/partActions"
import LegoSetShowDisplay from "../components/LegoSetShowDisplay"
import NotFoundErrorDisplay from '../components/NotFoundErrorDisplay'

class LegoSetShowContainer extends Component {
    
    findLegoSet = legoSetId => {
        const legoSet = this.props.legoSets.find(set => set.id === legoSetId)
        if (legoSetId && legoSet) {
            this.props.fetchPartsOfSet(legoSetId)
            return <LegoSetShowDisplay set={legoSet} changeOwnedSetStatus={this.props.changeOwnedSetStatus}/>
        } else {
            return <NotFoundErrorDisplay />
        }
    }

    render(){
        const legoSetId = parseInt(this.props.routeInfo.match.params.id)
        return(
            <div>
                {this.findLegoSet(legoSetId)}
            </div>
        )
    }
}

export default connect(({legoSets})=>({legoSets}), { changeOwnedSetStatus, fetchSetPartSpecs, fetchPartsOfSet })(LegoSetShowContainer)