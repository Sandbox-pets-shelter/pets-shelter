import { rootReducer } from 'store';

export interface ActionType<T> {
  type: string;
  payload: T;
}

export type AppStateType = ReturnType<typeof rootReducer>;
