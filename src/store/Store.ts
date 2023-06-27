import {createStore} from 'redux'
import { tokenReducer} from './tokens/TokenReducer'

const store = createStore(tokenReducer)

export default store;