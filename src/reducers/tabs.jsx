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

		case TAB_CLOSED:
			// Creates a new tab if the number of tabs is one
			if (state.items.length < 2) {
				return {
					items: [{
						uid: 'untitled-1',
						filename: 'Untitled',
						mode: 'html',
						value: ''
					}],
					active: 0
				}
			}
			return {
				items: state.items.filter((item) => {
					return item.uid !== action.uid;
				}),
				active: 0
			}
		break;

		default:
			return state;
		break;
	}
}
