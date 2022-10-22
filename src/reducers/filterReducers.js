import {
	FILTER_ADD_ITEM,
	FILTER_CLEAR_ITEMS,
	FILTER_REMOVE_ITEM
} from '../constants/commonConstants'


const filterReducer = (state=new Map(), { type, payload:{ fiters } = {}  } = {} ) => {
	console.log("fiters",fiters)
	switch(type) {
		case FILTER_ADD_ITEM: 
			return fiters
			break;
		case FILTER_REMOVE_ITEM:
			return fiters
			break;
		case FILTER_CLEAR_ITEMS:
			return fiters
			break;
		default:
		return state
		break

	}
}
export { filterReducer }