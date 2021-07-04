import { combineReducers } from 'redux'
import legoSetReducer from './legoSetReducer'
import loadingReducer from './loadingReducer'
import setPartSpecsReducer from './setPartSpecsReducer'
import partReducer from './partReducer'
import potentialBuildReducer from './potentialBuildReducer'
import noteReducer from './noteReducer'

export const rootReducer = combineReducers({
    legoSets: legoSetReducer,
    loading: loadingReducer,
    setPartSpecs: setPartSpecsReducer,
    parts: partReducer,
    potentialBuilds: potentialBuildReducer,
    notes: noteReducer
})