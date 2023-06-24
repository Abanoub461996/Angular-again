import { userStore } from '../../interfaces/user';
import { SetUserAction } from './user.action';

const userInit: userStore = {
  id: 0,
  email: '',
  password: '',
  name: '',
  role: '',
  avatar: '',
};
export function UserReducer(state = userInit, action: SetUserAction):userStore {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {...state};
  }
}
