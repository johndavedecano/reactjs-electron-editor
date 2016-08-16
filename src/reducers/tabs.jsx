// import {
// 	IMAGE_LOADED,
// 	IMAGE_FILTERS,
// 	IMAGE_OBJECT_SAVED
// } from './../constants';

const tabsState = {
	items: [{
		order: 1,
		uid: 'untitled-1',
		filename: 'Untitled',
		mode: 'html',
		value: 'fdsfsfsdfsd'
	}],
	active: 0
};

function tabs(state = tabsState, action) {
	switch(action.type)  {
		default:
			return state;
		break;
	}
}

export default tabs;