import { combineReducers } from 'redux'
import legoSetReducer from './legoSetReducer'
import loadingReducer from './loadingReducer'
import setPartSpecsReducer from './setPartSpecsReducer'
import partReducer from './partReducer'
import potentialBuildReducer from './potentialBuildReducer'
import userReducer from './userReducer'
import ownedSetsReducer from './ownedSetsReducer'

export const rootReducer = combineReducers({
    legoSets: legoSetReducer,
    loading: loadingReducer,
    setPartSpecs: setPartSpecsReducer,
    parts: partReducer,
    potentialBuilds: potentialBuildReducer,
    user: userReducer,
    ownedSets: ownedSetsReducer
})