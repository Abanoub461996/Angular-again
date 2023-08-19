import { Action } from '@ngrx/store';
import { userStore } from '../../interfaces/user';

export class SetUserAction implements Action {
    readonly type = 'SET_USER_DATA';
    constructor(public payload: userStore) { }
  }

// export type UserAction = SetUserAction;