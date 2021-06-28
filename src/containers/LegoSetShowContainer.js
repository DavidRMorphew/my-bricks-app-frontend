import React, {Component} from "react"
import { connect } from 'react-redux'
import { changeOwnedSetStatus } from '../actions/legoSetActions'
import { fetchSetPartSpecs } from "../actions/setPartSpecsActions"
import { fetchPartsOfSet } from "../actions/partActions"
import LegoSetShowDisplay from "../components/LegoSetShowDisplay"
import NotFoundErrorDisplay from '../components/NotFoundErrorDisplay'

class LegoSetShowContainer extends Component {

    componentDidMount(){
        const legoSetId = this.props.routeInfo.match.params.id
        this.props.fetchPartsOfSet(legoSetId)
        this.props.fetchSetPartSpecs(legoSetId)
    }
    
    findLegoSet = legoSetId => {
        const legoSet = this.props.legoSets.find(set => set.id === legoSetId)
        if (legoSetId && legoSet) {
            return <LegoSetShowDisplay set={legoSet} changeOwnedSetStatus={this.props.changeOwnedSetStatus}/>
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

export default connect(({legoSets, loading})=>({legoSets, loading}), { changeOwnedSetStatus, fetchSetPartSpecs, fetchPartsOfSet })(LegoSetShowContainer)