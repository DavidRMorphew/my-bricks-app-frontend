// combine reducers
// legoSets
//  actions: ADD_OWNED, FETCH_SETS
// parts
//  actions: FETCH_PARTS_OF_SET, PARTS_OWNED
// themes
//  actions: FETCH_THEMES
import { combineReducers } from 'redux'
import { legoSetReducer } from './legoSetReducer'
import { loadingReducer } from './loadingReducer'

export const rootReducer = combineReducers({
    legoSets: legoSetReducer,
    loading: loadingReducer
})