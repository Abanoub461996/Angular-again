import { Action } from '@ngrx/store';

export class SetUserAction implements Action {
    readonly type = 'SET_USER_DATA';
    constructor(public payload: any) { }
  }

// export type UserAction = SetUserAction;