import React, {Component} from "react"
import { connect } from 'react-redux'
import { changeOwnedSetStatus } from '../actions/legoSetActions'
import { fetchSetPartSpecs } from "../actions/setPartSpecsActions"
import { fetchPartsOfSet } from "../actions/partActions"
import LegoSetShowDisplay from "../components/LegoSetShowDisplay"
import NotFoundErrorDisplay from '../components/NotFoundErrorDisplay'

const LegoSetShowContainer = props => {
    const { routeInfo, legoSets, changeOwnedSetStatus, fetchPartsOfSet} = props
    const legoSetId = parseInt(routeInfo.match.params.id)
    const legoSet = legoSets.find(set => set.id === legoSetId)
    
    const renderLegoSetShowDisplay = () => {
        if (legoSetId && legoSet) {
            fetchPartsOfSet(legoSetId)
            return <LegoSetShowDisplay set={legoSet} changeOwnedSetStatus={changeOwnedSetStatus}/>
        } else {
            return <NotFoundErrorDisplay />
        }
    }

    return(
        <div>
            {renderLegoSetShowDisplay()}
        </div>
    )
}

export default connect(({legoSets})=>({legoSets}), { changeOwnedSetStatus, fetchSetPartSpecs, fetchPartsOfSet })(LegoSetShowContainer)