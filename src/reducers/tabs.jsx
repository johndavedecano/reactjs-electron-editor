import { 
  TAB_CREATED,
  TAB_CLOSED,
  TAB_ACTIVE_SET
} from './../constants';

const tabsState = {
	items: [{
		uid: 'untitled-1',
		filename: 'Untitled',
		mode: 'html',
		value: ''
	}],
	active: 0
};

export default function tabs(state = tabsState, action) {
	switch(action.type)  {
		case TAB_CREATED:
			state.items.push(action.tab);
			return {
				items: state.items,
				active: state.items.length - 1
			};
		break;

		default:
			return state;
		break;
	}
}
