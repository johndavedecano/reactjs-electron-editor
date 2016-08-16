import { 
  TAB_CREATED,
  TAB_CLOSED,
  TAB_ACTIVE_SET
} from './../constants';

export function closeTab(uid) {
  return {
    type: TAB_CLOSED,
    uid
  }
}

export function createTab(tab) {
  return {
    type: TAB_CREATED,
    tab
  }
}

export function setActive(index) {
  return {
    type: TAB_ACTIVE_SET,
    index
  }
}