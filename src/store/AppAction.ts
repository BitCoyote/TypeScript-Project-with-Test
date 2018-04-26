import { AddAction } from 'DUCKS/adder';
import { DecrementAction, IncrementAction } from 'DUCKS/counter';
import {
  FetchItemsRequestAction,
  FetchItemsResponseAction,
  SetItemsCurrentPageAction,
} from 'DUCKS/items';
import { FetchTodosRequestAction, FetchTodosResponseAction } from 'DUCKS/todos';

const UNKNOWN = 'UNKNOWN';

export interface UnknownAction {
  type: typeof UNKNOWN;
}

export const unknown = (): UnknownAction => ({
  type: UNKNOWN,
});

type AppAction =
  | AddAction
  | DecrementAction
  | FetchItemsRequestAction
  | FetchItemsResponseAction
  | FetchTodosRequestAction
  | FetchTodosResponseAction
  | IncrementAction
  | SetItemsCurrentPageAction
  | UnknownAction;

export default AppAction;
